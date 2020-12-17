const gulp = require("gulp")
const noop = require("gulp-noop")
const rename = require("gulp-rename")
const plumber = require("gulp-plumber")
const size = require("gulp-size")

const sass = require("gulp-sass")

const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

const babel = require("gulp-babel")

const devBuild =
  (process.env.NODE_ENV || "development").trim().toLowerCase() === "development"

const sourcemaps = devBuild ? require("gulp-sourcemaps") : null

function onError(err) {
  console.log(err)
}

gulp.task("scss", function (done) {
  gulp
    .src("sass/style.scss")
    .pipe(
      plumber({
        errorHandler: onError,
      })
    )
    .pipe(sourcemaps ? sourcemaps.init() : noop())
    .pipe(sass().on("finish", () => console.log("Sass done")))
    .pipe(size({ showFiles: true }))
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ["> 0.05%"],
        }),
        cssnano(),
      ])
    )
    .pipe(sourcemaps ? sourcemaps.write() : noop())
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest("public/css").on("finish", () => console.log("Css Done")))
  done()
})

gulp.task("js", function (done) {
  gulp
    .src("resources/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("js"))
  done()
})

gulp.task("btjs", function (done) {
  gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    ])
    .pipe(gulp.dest("js"))
  done()
})

gulp.task("watch", function (done) {
  gulp.watch("sass/**/*.scss", gulp.series("scss"))
  gulp.watch("js/*.js", gulp.series("js"))
})

//task default gulp
gulp.task("default", gulp.series("btjs", "js", "scss", "watch"))
