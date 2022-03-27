import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
const browserSync = require('browser-sync').create();
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import postcssNested from 'postcss-nested';
const sass = require('gulp-sass')(require('sass'));
import sourcemaps from 'gulp-sourcemaps';
import paths from '../paths';

// * конфигурация для таска
const config = {
    sass: { outputStyle: 'expanded' },
    renameCss: { suffix: '.min' },
    cleanCSS: { compatibility: 'ie8' },
};

// * описание таска
const stylesDev = () =>
    gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass))
        .pipe(cleanCSS(config.cleanCSS))
        .pipe(postcss([autoprefixer, postcssNested]))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());

export default stylesDev;
