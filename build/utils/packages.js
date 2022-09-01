import { BuildConfig } from "../constants/build"
import { PKG_PREFIX } from "../constants"

export const GetPackageManifest = (url) => {
    return require(url)
}

export const GetPackageDependencies = (url) => {
    const manifest = GetPackageManifest(url)
    const { dependencies = {}, peerDependencies = {} } = manifest

    return {
        dependencies: Object.keys(dependencies),
        peerDependencies: Object.keys(peerDependencies)
    }
}

export const ExcludeFiles = (files) => {
    const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"]
    return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}

export const PathRewriter = (module) => {
    const config = BuildConfig[module]

    return (id) => {
        return id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`)
    }
}
