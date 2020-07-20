const gulp = require("gulp");

gulp.task("message", async function () {
  return console.log("Gulp is running");
});

gulp.task("copyHtml", async function () {
  gulp.src("src/*.html").pipe(gulp.dest("public"));
});
