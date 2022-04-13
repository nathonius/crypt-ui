import * as gulp from "gulp";
import prefix from "gulp-autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";

gulp.task("scss", () => {
  const sass = gulpSass(dartSass);
  return gulp
    .src("src/crypt.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(prefix({ cascade: false }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.scss", gulp.series("scss"));
});
gulp.task("default", gulp.series("scss"));
