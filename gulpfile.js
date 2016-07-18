const gulp = require('gulp');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const annotate = require('gulp-ng-annotate');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const browser = require('browser-sync');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const paths = {
  js: {
    input: 'client/js/**/*.js',
    output: 'public/js',
  },
  html: {
    input: 'client/html/**/*.html',
    output: 'public/html',
  },
  pug: {
    input: 'client/html/**/*.pug',
    output: 'public/html',
  },
  css: {
    input: 'client/css/**/*.scss',
    output: 'public/css',
  },
  favicon: {
    input: 'client/favicon.ico',
    output: 'public',
  },
};


// RUNNERS
gulp.task('default', ['build', 'watch', 'nodemon']);

gulp.task('sync', ['build', 'watch', 'b-sync']);

gulp.task('build', ['pug/html', 'css', 'js', 'favicon']);

// WATCHES
gulp.task('watch', () => {
  gulp.watch(['client/html/**/*.pug', 'client/html/**/*.html'], ['pug/html']);
  gulp.watch('client/js/**/*.js', ['js']);
  gulp.watch('client/css/**/*.scss', ['css']);
  gulp.watch('client/*.ico', ['favicon']);
});

// TESTS
gulp.task('test', () =>
  gulp.src('./test/**/*.js', { read: false })
  .pipe(mocha())
);

gulp.task('testing', () =>
  gulp.watch('./test/**/*.js', ['test'])
);


// LINTING
gulp.task('lint', () =>
  gulp.src(['**/*.js', '!public/**', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
);

gulp.task('watch:lint', ['lint'], () => {
  gulp.watch(['**/*.js', '!public/**', '!node_modules/**'], ['lint']);
});


// BROWSER SYNC
gulp.task('b-sync', ['nodemon'], () => {
  browser.init({
    proxy: 'http://localhost:8000',
    files: ['public/**/*.*'],
  });
});


// nodemon
gulp.task('nodemon', () => {
  nodemon({
    script: 'app.js',
    ext: 'html js',
    ignore: ['./client', './public'],
  })
  .on('restart', () => {
    console.log('restarted!');
  });
});


// JS
gulp.task('js', ['clean:js'], () => {
  gulp.src(paths.js.input)
    .pipe(plumber())
    .pipe(sourcemaps.init('.'))
    .pipe(concat('bundle.js'))
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.output));
});

gulp.task('clean:js', () =>
  del([paths.js.output])
);


// HTML
gulp.task('html', () =>
  gulp.src(paths.html.input)
  .pipe(gulp.dest(paths.html.output))
);
// TODO: FIX PUG/HTML CONCURRENCY ISSUE
// PUG
gulp.task('pug/html', ['clean:html'], () =>
  gulp.src(paths.pug.input)
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(paths.pug.output))
);

gulp.task('clean:html', () =>
  del([paths.html.output])
);


// CSS/SCSS
gulp.task('css', ['clean:css'], () =>
  gulp.src(paths.css.input)
  .pipe(plumber())
  .pipe(sourcemaps.init('.'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.css.output))
);

gulp.task('clean:css', () =>
  del([paths.css.output])
);


// FAVICON
gulp.task('favicon', () =>
  gulp.src(paths.favicon.input)
  .pipe(gulp.dest(paths.favicon.output))
);
