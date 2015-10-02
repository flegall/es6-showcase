import gulp        from 'gulp';
import babel       from 'gulp-babel';
import sourcemaps  from 'gulp-sourcemaps';
import del         from 'del';
import mocha       from 'gulp-mocha';

gulp.task('clean', () => {
    return del('build');
});

gulp.task('build', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

gulp.task('test', function () {
    return gulp.src('src/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'nyan',
            compilers: 'js:babel/register'
        }));
});

gulp.task('default', ['build', 'test'], () => {});
