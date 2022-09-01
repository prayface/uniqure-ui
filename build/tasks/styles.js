import { dest, series, src } from "gulp"
import { PACKAGES, UI_OUTPUT } from "../constants"
import { resolve } from "path"

import Autoprefixer from "gulp-autoprefixer" // css兼容性处理
import CleanCss from "gulp-clean-css" // css压缩
import GulpLess from "gulp-less" // less编译
import DartLess from "less"
import consola from "consola"
import chalk from "chalk"

const CopyAssets = () => {
    return src(resolve(PACKAGES, "assets/**")).pipe(dest(resolve(UI_OUTPUT, "assets")))
}

const BuildLess = () => {
    return src(resolve(PACKAGES, "assets/less/**/*.less"))
        .pipe(GulpLess(DartLess))
        .pipe(Autoprefixer({ cascade: false }))
        .pipe(
            CleanCss({}, (details) => {
                consola.success(
                    `${chalk.cyan(details.name)}: ${chalk.yellow(
                        details.stats.originalSize / 1000
                    )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
                )
            })
        )
        .pipe(dest(resolve(UI_OUTPUT, "assets/css")))
}

export const BulidAssets = series(CopyAssets, BuildLess)
