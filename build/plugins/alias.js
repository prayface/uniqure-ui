import { PKG_PREFIX, PKG_NAME } from "../constants"

export function AliasPlugin() {
    const source = `${PKG_PREFIX}/assets`
    const bundle = `${PKG_NAME}/assets`
    return {
        name: "alias-plugin",
        resolveId(id) {
            if (!id.startsWith(source)) return
            return { id: id.replace(source, bundle), external: "absolute" }
        }
    }
}

// const result = []
// const paths = id.split("/")
// const name = paths.splice(-1)[0]

// paths.forEach((v) => {
//     if (v === PKG_PREFIX) result.push(".")
//     else result.push("..")
// })

// return { id: `${result.join("/")}/${name}` }
