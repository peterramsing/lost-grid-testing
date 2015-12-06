/* global require */

var gulp            = require("gulp"),
    // GLOBAL
    plumber         = require("gulp-plumber"),

    // STYLES
    sourcemaps   = require("gulp-sourcemaps"),

    postcss          = require("gulp-postcss"),
        lost         = require("lost")



// STYLES
gulp.task("styles", function() {
    return gulp.src("dev/main.css")
        .pipe(sourcemaps.init())
        .pipe(postcss([
            lost()
        ]))

        // .on("error", function(err) {
        //     console.log(err);
        // })
        .pipe(sourcemaps.write("./"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public/styles/"))
});

gulp.task("default", function() {

    gulp.start("styles");

    gulp.watch(["dev/main.css"], ["styles"]);


});
