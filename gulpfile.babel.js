import gulp        from 'gulp';
import babel       from 'gulp-babel';
import sourcemaps  from 'gulp-sourcemaps';
import del         from 'del';
import mocha       from 'gulp-mocha';
import watch       from 'gulp-watch';
import batch       from 'gulp-batch';

gulp.task('clean', () => {
    return del('build');
});

gulp.task('build', ['clean'], () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

gulp.task('test', ['build'], () => {
    return gulp.src('build/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
            require: ['source-map-support/register']
        }));
});

gulp.task('watch', function () {
    watch('src/**/*.js', batch(function (events, done) {
        gulp.start('test', done);
    }));
});

gulp.task('default', ['watch']);
