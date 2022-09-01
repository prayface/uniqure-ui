import fs from "fs"
import { OUTPUT } from "../constants"

export const CreateDirectory = (cb) => {
    if (!fs.existsSync(OUTPUT)) {
        fs.mkdirSync(OUTPUT)
    }

    fs.mkdirSync(`${OUTPUT}/assets`)
    fs.mkdirSync(`${OUTPUT}/assets/fonts`)
    fs.mkdirSync(`${OUTPUT}/assets/less`)
    fs.mkdirSync(`${OUTPUT}/assets/css`)

    cb && cb()
}
