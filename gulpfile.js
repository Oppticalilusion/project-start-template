require('./gulp/tasks/watch');
require('./gulp/tasks/styles')

var gulp = require('gulp');

gulp.task('default', function a() {
	console.log("This is just a default, add more to your gulp request");
});

gulp.task('html', function a() {
	console.log("Imagine something useful being done to your html here");
});

