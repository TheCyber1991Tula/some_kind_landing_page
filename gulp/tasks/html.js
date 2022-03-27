import gulp from 'gulp';
const browserSync = require('browser-sync').create();
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import paths from '../paths';

// * конфигурация для таска
const config = {
    'html': {
        // * конфиг для таска если пишешь на обычном html
        'collapseWhitespace': true,
        'removeComments': true,
    },
};

// * описание таска

const html = () => gulp
    .src(paths.html.src)
    .pipe(plumber())
    .pipe(htmlmin(config.html))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());

export default html;
