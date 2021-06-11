const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!.husky{,/**}',
    '!**/.DS_Store'
  ]);
}

// JavaScript and JSON linter
function lintJs () {
  return gulp.src(addDefSrcIgnore(['**/*.js', '**/*.json']), {dot: true})
    .pipe($.eslint({dotfiles: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

// HTML linter
function lintHtml () {
  return gulp.src(addDefSrcIgnore(['**/*.html']))
    .pipe($.htmllint({config: '.htmllintrc.json', failOnError: true}));
}

// CSS linter
function lintCss () {
  return gulp.src(addDefSrcIgnore(['**/*.css']))
    .pipe($.stylelint({
      failAfterError: true,
      reporters: [{formatter: 'string', console: true}]
    }));
}

// Lint all files
exports.lint = gulp.parallel(
  lintJs,
  lintHtml,
  lintCss
);