import glob from "fast-glob"
import VuePlugin from "@vitejs/plugin-vue"
import VueJsxPlugin from "@vitejs/plugin-vue-jsx"
import DefineOptions from "unplugin-vue-define-options/rollup"
import CommonJSPlugin from "@rollup/plugin-commonjs"
import GulpAliasPlugin from "@rollup/plugin-alias"
import NodeResolvePlugin from "@rollup/plugin-node-resolve"
import ESBuildPlugin, { minify as MinifyPlugin } from "rollup-plugin-esbuild"

import { rollup } from "rollup"
import { Target } from "../constants/build"
import { resolve } from "path"
import { parallel } from "gulp"
import { AliasPlugin } from "../plugins/alias"
import { FormatBundleFilename, GenerateExternal, WriteBundles } from "../utils/rollup"
import { PACKAGES, UI_ROOT, UI_OUTPUT, PKG_BRAND_NAME, PKG_CAMELCASE_NAME } from "../constants"

import { version } from "../../packages/uniqure-ui/package.json"

const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`
const customResolver = NodeResolvePlugin({
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts"]
})

const BuildFullEntry = async (minify) => {
    const plugins = [
        AliasPlugin(),
        GulpAliasPlugin({
            customResolver: customResolver,
            entries: [{ find: "@uniqure-ui", replacement: PACKAGES }]
        }),
        NodeResolvePlugin(),
        DefineOptions(),
        VuePlugin({ isProduction: true }),
        VueJsxPlugin(),
        CommonJSPlugin(),
        ESBuildPlugin({
            exclude: [],
            sourceMap: minify,
            target: Target,
            loaders: {
                ".vue": "ts"
            },
            define: {
                "process.env.NODE_ENV": JSON.stringify("production")
            },
            treeShaking: true,
            legalComments: "eof"
        })
    ]

    minify && plugins.push(MinifyPlugin({ target: Target, sourceMap: true }))

    const bundle = await rollup({
        input: resolve(UI_ROOT, "index.ts"),
        plugins: plugins,
        external: await GenerateExternal({ full: true }),
        treeshake: true
    })

    await WriteBundles(bundle, [
        {
            format: "umd",
            file: resolve(UI_OUTPUT, "dist", FormatBundleFilename("index.full", minify, "js")),
            exports: "named",
            name: PKG_CAMELCASE_NAME,
            globals: {
                vue: "Vue"
            },
            sourcemap: minify,
            banner
        },
        {
            format: "esm",
            file: resolve(UI_OUTPUT, "dist", FormatBundleFilename("index.full", minify, "mjs")),
            sourcemap: minify,
            banner
        }
    ])
}

const BuildFull = (minify) => {
    return (cb) => {
        BuildFullEntry(minify)
        cb && cb()
    }
}

export const BuildFullModules = parallel(BuildFull(true), BuildFull(false))
