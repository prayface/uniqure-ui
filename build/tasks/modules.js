/**@name 压缩编译组件库Vue,js,ts代码 */

import glob from "fast-glob"
import VuePlugin from "@vitejs/plugin-vue"
import VueJsxPlugin from "@vitejs/plugin-vue-jsx"
import DefineOptions from "unplugin-vue-define-options/rollup"
import CommonJSPlugin from "@rollup/plugin-commonjs"
import ESBuildPlugin from "rollup-plugin-esbuild"
import GulpAliasPlugin from "@rollup/plugin-alias"
import NodeResolvePlugin from "@rollup/plugin-node-resolve"

import { rollup } from "rollup"
import { AliasPlugin } from "../plugins/alias"
import { ExcludeFiles } from "../utils/packages"
import { UI_ROOT, PACKAGES, DIRNAME, UI_OUTPUT } from "../constants"
import { BuildConfigEntries, Target } from "../constants/build"
import { GenerateExternal, WriteBundles } from "../utils/rollup"
import { resolve } from "path"

const customResolver = NodeResolvePlugin({
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".css", ".less", ".otf"]
})

export const BuildModules = async (cb) => {
    const input = ExcludeFiles(
        await glob(["**/*.{js,ts,vue}", "!assets/**/*"], {
            cwd: PACKAGES,
            absolute: true,
            onlyFiles: true
        })
    )

    const bundle = await rollup({
        input,
        treeshake: false,
        external: await GenerateExternal({ full: false }),
        plugins: [
            AliasPlugin(),
            GulpAliasPlugin({
                customResolver: customResolver,
                entries: [{ find: "@uniqure-ui", replacement: PACKAGES }]
            }),
            NodeResolvePlugin(),
            DefineOptions(),
            VuePlugin({ isProduction: false }),
            VueJsxPlugin(),
            CommonJSPlugin(),
            ESBuildPlugin({
                target: Target,
                sourceMap: true,
                loaders: {
                    ".vue": "ts"
                }
            })
        ]
    })

    await WriteBundles(
        bundle,
        BuildConfigEntries.map(([module, config]) => {
            return {
                format: config.format,
                dir: config.output.path,
                exports: module === "cjs" ? "named" : undefined,
                preserveModules: true,
                preserveModulesRoot: UI_ROOT,
                sourcemap: true,
                entryFileNames: `[name].${config.ext}`
            }
        })
    )

    cb && cb()
}
