import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js"

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.images, images)
}
const mainTasks = gulp.parallel(copy, scss, images);
const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);


