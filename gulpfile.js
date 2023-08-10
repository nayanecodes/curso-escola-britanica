const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())    
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function olaMundo(retorno) {
    setTimeout(function(){
        console.log("Olá Mundo");
        retorno();
    }, 2000);
    
} 

function dizOi(retorno) {
    console.log("Olá Gulp");
    dizTchau();
    retorno();
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.parallel(olaMundo, dizOi);
exports.dizOi = dizOi;

exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
}