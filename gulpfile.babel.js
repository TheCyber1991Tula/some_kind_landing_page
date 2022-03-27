import { task, series, parallel } from 'gulp';
import scripts from './gulp/tasks/scripts';
import stylesDev from './gulp/tasks/stylesDev';
import stylesBuild from './gulp/tasks/stylesBuild';
import html from './gulp/tasks/html';
import clean from './gulp/tasks/clean';
import watching from './gulp/tasks/watch';
import images from './gulp/tasks/images';

import fs from 'fs';

task('dev', series(html, stylesDev, scripts, images, watching));
task('build', series(clean, parallel(html, stylesBuild, scripts, images)));
task('clean', clean);

const dir = fs.readdirSync('./src/assets/styles');
console.log(dir.length);
