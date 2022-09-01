import { GetPackageDependencies } from "./packages"
import { DIRNAME } from "../constants"
import { resolve } from "path"

export const GenerateExternal = async (options = { full: false }) => {
    const { dependencies, peerDependencies } = GetPackageDependencies(resolve(DIRNAME, "package.json"))

    return (id) => {
        const packages = peerDependencies
        if (!options.full) {
            packages.push("@vue", ...dependencies)
        }

        return [...new Set(packages)].some((pkg) => {
            return pkg === id || id.startsWith(`${pkg}/`)
        })
    }
}

export function WriteBundles(bundle, options) {
    return Promise.all(options.map((option) => bundle.write(option)))
}

export function FormatBundleFilename(name, minify, ext) {
    return `${name}${minify ? ".min" : ""}.${ext}`
}
