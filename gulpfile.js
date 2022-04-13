import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
}

import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { iconsMono, iconsMulti } from './gulp/tasks/icons.js';


function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}


const iconSprite = gulp.parallel(iconsMono, iconsMulti);

export {iconSprite};

const mainTasks = gulp.parallel(html, scss, js, images);

const dev = gulp.series(reset, mainTasks, iconSprite, fonts, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks, iconSprite, fonts);

export {dev}
export {build}

gulp.task('default', dev);