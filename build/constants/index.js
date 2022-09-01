import { resolve } from "path"

export const DIRNAME = resolve(__dirname, "../../")
export const PACKAGES = resolve(DIRNAME, "packages")
export const OUTPUT = resolve(DIRNAME, "dist")

export const PKG_CAMELCASE_NAME = "UniqureUI"
export const PKG_BRAND_NAME = "Uniqure UI"
export const PKG_PREFIX = "@uniqure-ui"
export const PKG_NAME = "uniqure-ui"

export const UI_ROOT = resolve(PACKAGES, "uniqure-ui")
export const UI_OUTPUT = OUTPUT

export const INSTALLED_KEY = Symbol("INSTALLED_KEY")
