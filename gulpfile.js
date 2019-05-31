require('./gulp/tasks/watch');

var gulp = require('gulp');

gulp.task('default', function a() {
	console.log("Hooray");
});

gulp.task('html', function a() {
	console.log("Imagine something useful being done to your html here");
});

gulp.task('styles', function a() {
	console.log("Imagine Sass or PostCSS task running here.");
});