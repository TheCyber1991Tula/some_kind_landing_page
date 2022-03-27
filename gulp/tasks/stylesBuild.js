import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import postcssNested from 'postcss-nested';
const sass = require('gulp-sass')(require('sass'));
import paths from '../paths';

// * конфигурация для таска
const config = {
    sass: { outputStyle: 'compressed' },
    renameCss: { suffix: '.min' },
    cleanCSS: { compatibility: 'ie8' },
};

// * описание таска
const stylesBuild = () =>
    gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sass(config.sass))
        .pipe(cleanCSS(config.cleanCSS))
        .pipe(postcss([autoprefixer, postcssNested]))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(paths.styles.dest))

export default stylesBuild;
