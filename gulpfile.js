const { prependListener } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')

/* TOP LEVEL FUNCTIONS */
/* 
    gulp.task - Define tasks
    gulp.src - Points to files to use 
    gulp.dest - Points to folder to output
    gulp.watch - watch files and folder for changes
*/

// Logs Message 
gulp.task('concat-js', async function () {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('../Trivia App'))
})