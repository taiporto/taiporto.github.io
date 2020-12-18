const gulp = require("gulp")
const noop = require("gulp-noop")
const del = require("del")
const plumber = require("gulp-plumber")
const size = require("gulp-size")

const sass = require("gulp-sass")

const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

const uglify = require("gulp-uglify")
const concat = require("gulp-concat")
const babel = require("gulp-babel")

const devBuild =
(process.env.NODE_ENV || "development").trim().toLowerCase() === "development"

const sourcemaps = devBuild ? require("gulp-sourcemaps") : null

function onError(err) {
  console.log(err)
}

gulp.task('cleanJs', function(){
  return del(['docs/js/jquery-ui.min.js']);
});

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

gulp.task("devjs", function (done) {
  gulp
    .src("js/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("docs/js"))
  done()
})


gulp.task("jsproduction", function (done) {
  gulp
    .src(["js/jquery-ui.min.js", "js/script.js"])
    .pipe(
      plumber({
        errorHandler: onError,
      })
    )
    .pipe(sourcemaps ? sourcemaps.init() : noop())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      }).on("finish", () => console.log("Babel done"))
    )
    .pipe(size({ showFiles: true }))
    .pipe(uglify())
    .pipe(concat("script.js"))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest("docs/js"))
  done()
})

gulp.task("watch", function (done) {
  gulp.watch("sass/**/*.scss", gulp.series("scss"))
  gulp.watch("js/*.js", gulp.series("jsproduction"))
})

//task default gulp
gulp.task("default", gulp.series("devjs", "scss", "watch"))

//deploy task
gulp.task("deploy", gulp.series("cleanJs", "jsproduction", "scss"))
