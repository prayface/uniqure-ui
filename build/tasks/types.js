import * as vueCompiler from "vue/compiler-sfc"
import consola from "consola"
import chalk from "chalk"
import glob from "fast-glob"

import { UI_OUTPUT, UI_ROOT, PACKAGES, DIRNAME } from "../constants"
import { mkdir, readFile, writeFile } from "fs/promises"
import { ExcludeFiles, PathRewriter } from "../utils/packages"
import { Project } from "ts-morph"
import { resolve, relative, dirname } from "path"

const outDir = resolve(UI_OUTPUT, "types")
const tsconfig = resolve(DIRNAME, "tsconfig.modules.json")

const AddSourceFiles = async (project) => {
    project.addSourceFileAtPath(resolve(DIRNAME, "typings/env.d.ts"))

    const globSourceFile = "**/*.{js?(x),ts?(x),vue}"
    const filePaths = ExcludeFiles(
        await glob([globSourceFile, "!uniqure-ui/**/*", "!assets/**/*"], {
            cwd: PACKAGES,
            absolute: true,
            onlyFiles: true
        })
    )

    const epPaths = ExcludeFiles(
        await glob(globSourceFile, {
            cwd: UI_ROOT,
            onlyFiles: true
        })
    )

    const sourceFiles = []
    await Promise.all([
        ...filePaths.map(async (file) => {
            if (file.endsWith(".vue")) {
                const content = await readFile(file, "utf-8")
                const hasTsNoCheck = content.includes("@ts-nocheck")

                const sfc = vueCompiler.parse(content)
                const { script, scriptSetup } = sfc.descriptor
                if (script || scriptSetup) {
                    let content = (hasTsNoCheck ? "// @ts-nocheck\n" : "") + (script?.content ?? "")

                    if (scriptSetup) {
                        const compiled = vueCompiler.compileScript(sfc.descriptor, {
                            id: "xxx"
                        })
                        content += compiled.content
                    }

                    const lang = scriptSetup?.lang || script?.lang || "js"
                    const sourceFile = project.createSourceFile(`${relative(process.cwd(), file)}.${lang}`, content)
                    sourceFiles.push(sourceFile)
                }
            } else {
                const sourceFile = project.addSourceFileAtPath(file)
                sourceFiles.push(sourceFile)
            }
        }),
        ...epPaths.map(async (file) => {
            const content = await readFile(resolve(UI_ROOT, file), "utf-8")
            sourceFiles.push(project.createSourceFile(resolve(PACKAGES, file), content))
        })
    ])

    return sourceFiles
}

const TypeCheck = (project) => {
    const diagnostics = project.getPreEmitDiagnostics()
    if (diagnostics.length > 0) {
        diagnostics.forEach((v) => consola.success(v))
        consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
        const err = new Error("Failed to generate dts.")
        consola.error(err)
        throw err
    }
}

export const GenerateTypes = async (cb) => {
    const compilerOptions = {
        outDir: outDir,
        baseUrl: DIRNAME,
        skipLibCheck: true,
        noImplicitAny: false,
        preserveSymlinks: true,
        emitDeclarationOnly: true
    }

    const project = new Project({
        compilerOptions,
        tsConfigFilePath: tsconfig,
        skipAddingFilesFromTsConfig: true
    })

    const sourceFiles = await AddSourceFiles(project)
    consola.success("Added source files")

    TypeCheck(project)
    consola.success("Type check passed!")

    await project.emit({
        emitOnlyDtsFiles: true
    })

    const tasks = sourceFiles.map(async (sourceFile) => {
        const relativePath = relative(PACKAGES, sourceFile.getFilePath())
        consola.trace(chalk.yellow(`Generating definition for file: ${chalk.bold(relativePath)}`))

        const emitOutput = sourceFile.getEmitOutput()
        const emitFiles = emitOutput.getOutputFiles()
        if (emitFiles.length === 0) {
            throw new Error(`Emit no file: ${chalk.bold(relativePath)}`)
        }

        const subTasks = emitFiles.map(async (outputFile) => {
            const filepath = outputFile.getFilePath()
            await mkdir(dirname(filepath), {
                recursive: true
            })

            await writeFile(filepath, PathRewriter("esm")(outputFile.getText()), "utf8")

            consola.success(chalk.green(`Definition for file: ${chalk.bold(relativePath)} generated`))
        })

        await Promise.all(subTasks)
    })

    await Promise.all(tasks)

    cb && cb()
}
