const { series, src } = require("gulp")
const GulpClean = require("gulp-clean")

const clean = (cb) => {
    src("dist/*", { allowEmpty: true }).pipe(GulpClean({ force: true }))
    cb()
}

exports.default = series(clean)
