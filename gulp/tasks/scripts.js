import gulp from 'gulp';
import babel from 'gulp-babel';
const browserSync = require('browser-sync').create();
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import prettier from 'gulp-prettier';
import paths from '../paths.js';

// * конфигурация для таска
const config = {
    uglify: { toplevel: true },
};

// * описание таска
const scripts = () =>
    gulp
        .src(paths.scripts.src, { sourcemaps: true })
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify(config.uglify))
        .pipe(concat('script.min.js'))
        .pipe(prettier())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());

export default scripts;
