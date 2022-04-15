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

gulp.task("html", () => gulp.src(["index.html"]).pipe(gulp.dest("./dist")));
gulp.task("assets", () =>
  gulp.src(["assets/**/*"]).pipe(gulp.dest("./dist/assets"))
);

gulp.task("copy", gulp.series("html", "assets"));

gulp.task("watch", () => {
  gulp.watch(["src/**/*.scss", "index.html"], gulp.series("default"));
});
gulp.task("default", gulp.series("scss", "copy"));
