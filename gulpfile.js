var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
const babel = require('gulp-babel');
 
gulp.task('compileComps', () => {
	return gulp.src('./client/components/**/*.jsx')
		.pipe(react())
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(gulp.dest('./public/components'));
});

gulp.task('compileBase', () => {
	return gulp.src('./client/base.jsx')
		.pipe(react())
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(gulp.dest('./public/js/'));
})

gulp.task('compile', ['compileComps', 'compileBase']);

gulp.task('concat', () => {
	return gulp.src(['./public/components/**/*.js', './public/js/base.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'));
	
})

gulp.task('default', ['compile', 'concat']);

gulp.task('watch', function() {
  gulp.watch('client/**/*.jsx', ['default']);
});