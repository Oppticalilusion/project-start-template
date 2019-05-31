// File is in charge of the gulp watch functionality

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function() {
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	})
	
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

//----------------------------------------------------------------------------------------
// Working file that runs


//var gulp = require('gulp');
//var watch = require('gulp-watch');
//var browserSync = require('browser-sync').create();

//var a = function() {
//	gulp.watch('index.html', ['html']);
//	console.log('Hello There');
//}

//gulp.task('watch', a);

//------------------------------------------------------------------------------------------

// Example files for a gulp watch from travel site
//
//var gulp = require('gulp');
//var watch = require('gulp-watch');
//var browserSync = require('browser-sync').create();
//
//gulp.task('watch', function() {
//	
//	browserSync.init({
//		notify: false,
//		server: {
//			baseDir: "app"
//		}
//	});
//	
//	watch('./app/index.html', function() {
//		browserSync.reload();
//	});
//	
//	watch('./app/assets/styles/**/*.css', function() {
//		gulp.start('cssInject');
//	})
//	
//});
//
//gulp.task('cssInject', ['styles'], function() {
//	return gulp.src('./app/temp/styles/styles.css')
//		.pipe(browserSync.stream());
//});
