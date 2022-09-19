import { parallel, series } from "gulp"
import { CleanDirectory } from "./tasks/clean" // 清空dist目录下内容
import { CreateDirectory } from "./tasks/create" // 创建dist目录
import { BuildModules } from "./tasks/modules" // 打包vue, ts, tsx, js文件(增量打包)
import { BuildFullModules } from "./tasks/modules-full" // 打包vue, ts, tsx, js文件(全量打包)
import { GenerateTypes } from "./tasks/types" // 根据vue, ts, tsx, js内容编译类型文件
import { BulidAssets } from "./tasks/styles" // less编译
import { CopyTypes, CopyFiles } from "./tasks/copy" // 文件复制

export default series(
    CleanDirectory,
    CreateDirectory,
    BulidAssets,
    series(BuildModules, GenerateTypes),
    // series(BuildModules, BuildFullModules, GenerateTypes),
    parallel(CopyTypes("esm"), CopyTypes("cjs"), CopyFiles)
)
