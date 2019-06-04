require('./gulp/tasks/watch');
require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');

var gulp = require('gulp');

gulp.task('default', function a() {
	console.log("This is just a default, add more to your gulp request");
});
