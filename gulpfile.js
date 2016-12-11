var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;
    cleanCSS = require('gulp-clean-css');
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    minifyhtml = require('gulp-minify-html');
    nodeSassGlobbing = require('node-sass-globbing');

// Paths to various files

var paths = {
    scripts: ['app/js/app.js','app/js/services.js','app/js/controllers.js','app/js/filters.js','app/js/directives.js'],
    styles: ['app/scss/main.scss','app/scss/**/*.scss'],
    images: ['app/images/**/*'],
    content: ['app/*.html']
}

// Compiles scss files and outputs minified file to dist/css/
gulp.task('styles', function() {
    return gulp.src(paths.styles)
      .pipe(sass({
          importer: nodeSassGlobbing,
          includePaths: ['styles'].concat(neat)
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(cleanCSS({debug: true}, function(details) {
          console.log(details.name + ': ' + details.stats.originalSize);
          console.log(details.name + ': ' + details.stats.minifiedSize);
      }))
      .pipe(gulp.dest('./dist/css/'));
});


// Concats & minifies js files and outputs them to dist/js/app.js
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify({
          'mangle': false
        }))
        .pipe(concatify('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/'));
});

// Minifies our HTML files and outputs them to dist/
gulp.task('content', function() {
    return gulp.src(paths.content)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist'))
});

// Optimizes our image files and outputs them to dist/image/
gulp.task('images', function() {
    return gulp.src(paths.images)
                .pipe(imagemin({
                    optimizationLevel: 5
                }))
                .pipe(gulp.dest('./dist/images'))
})

// Watches for changes to our files and executes required scripts
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.content, ['content']);
    gulp.watch(paths.images, ['images']);
});

// Launches a test webserver
gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            port: 8888
        }));
});

gulp.task('default', ['watch', 'webserver']);
