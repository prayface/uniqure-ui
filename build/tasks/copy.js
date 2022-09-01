import consola from "consola"

import { copy } from "fs-extra"
import { resolve } from "path"
import { copyFile } from "fs/promises"
import { BuildConfig } from "../constants/build"
import { DIRNAME, OUTPUT, PACKAGES } from "../constants"

export const CopyTypes = (module) => {
    const src = resolve(OUTPUT, "types", "packages")
    return (cb) => {
        consola.success(`copyTypes:${module}`)
        copy(src, BuildConfig[module].output.path, { recursive: true })
        cb && cb()
    }
}

export const CopyFiles = (cb) => {
    Promise.all([
        copyFile(resolve(PACKAGES, "uniqure-ui/package.json"), resolve(OUTPUT, "package.json")),
        copyFile(resolve(DIRNAME, "README.md"), resolve(OUTPUT, "README.md")),
        copyFile(resolve(DIRNAME, "global.d.ts"), resolve(OUTPUT, "global.d.ts"))
    ])

    cb && cb()
}
