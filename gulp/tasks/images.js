import gulp from 'gulp';
import plumber from 'gulp-plumber';
import paths from '../paths';
import imagemin from 'gulp-imagemin';
const browserSync = require('browser-sync').create();

// * конфигурация для таска
const config = [
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ];

// * описание таска
const images = () =>
    gulp
    .src(paths.images.src)
    .pipe(plumber())
    .pipe(imagemin(config))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());

export default images;
