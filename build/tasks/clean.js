/**@name 清空lib文件夹内容 */

import clean from "gulp-clean"

import { src } from "gulp"
import { OUTPUT } from "../constants"

export const CleanDirectory = () => {
    return src(`${OUTPUT}/*`, { allowEmpty: true }).pipe(clean({ force: true }))
}
