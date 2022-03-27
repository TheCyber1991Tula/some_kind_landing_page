import { watch } from 'gulp';
import paths from '../paths';
import styles from './stylesDev';
import scripts from './scripts';
import html from './html';
import images from './images';

const browserSync = require('browser-sync').create();

// * описание таска
const watching = () => {
    browserSync.init({
        server: {
            baseDir: paths.serve.dir
        },
        port: 3000,
        open: true,
        notify: true,
    });
    watch(paths.scripts.src, scripts).on('change', browserSync.reload);
    watch(paths.styles.src, styles).on('change', browserSync.reload);
    watch(paths.html.src, html).on('change', browserSync.reload);
    watch(paths.images.src, images).on('change', browserSync.reload);
};

export default watching;
