var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
	if (process.env.NODE_ENV === 'development') {
		gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/css'));
	}	else {
		gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
	}
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('set-dev-node-env', function () {
	process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function () {
	process.env.NODE_ENV = 'production';
});

gulp.task('default', ['set-prod-node-env', 'sass']);

gulp.task('dev', ['set-dev-node-env', 'sass', 'sass:watch']);
