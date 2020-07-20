const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

gulp.task("message", async function () {
  return console.log("Gulp is running");
});

gulp.task("copyHtml", async function () {
  gulp.src("src/*.html").pipe(gulp.dest("public"));
});

gulp.task("imageMin", () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("public/images"))
);

gulp.task("minify", async function () {
  gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("public/js"));
});
