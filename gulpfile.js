var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Hooray");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your html here");
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	})
});