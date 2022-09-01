import { resolve } from "path"
import { UI_OUTPUT, PKG_NAME } from "../constants"

export const Target = "es2018"

export const BuildConfig = {
    esm: {
        module: "ESNext",
        format: "esm",
        ext: "mjs",
        output: {
            name: "es",
            path: resolve(UI_OUTPUT, "es")
        },
        bundle: {
            path: `${PKG_NAME}/es`
        }
    },
    cjs: {
        module: "CommonJS",
        format: "cjs",
        ext: "js",
        output: {
            name: "lib",
            path: resolve(UI_OUTPUT, "lib")
        },
        bundle: {
            path: `${PKG_NAME}/lib`
        }
    }
}

export const BuildConfigEntries = Object.entries(BuildConfig)
