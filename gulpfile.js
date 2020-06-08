const gulp = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");

const assets = {
  dev: {
    js: "./assets/src/js/*.js",
    css: "./assets/src/css/*.css",
  },

  dist: {
    js: {
      path: "./assets/dist/js/",
      name: "script.js",
    },
    css: {
      path: "./assets/dist/css/",
      name: "style.min.css",
    },
  },
};

// Importar CSS dos assets
function minCss() {
  return gulp
    .src(assets.dev.css)
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat(assets.dist.css.name))
    .pipe(gulp.dest(assets.dist.css.path));
}

function minJs() {
  return gulp
    .src(assets.dev.js)
    .pipe(concat(assets.dist.js.name))
    .pipe(
      minify({
        ext: {
          min: ".min.js",
        },
      })
    )
    .pipe(gulp.dest(assets.dist.js.path));
}

// Assistir arquivos
function watch() {
  gulp.watch(assets.dev.js, minJs);
  gulp.watch(assets.dev.css, minCss);
}

gulp.task("default", function () {
  minJs();
  minCss();
  return watch();
});

gulp.task("watch", watch);
