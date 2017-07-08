'use strict';

/**
 *******************************************************
 * Modules
 *******************************************************
 */
var gulp = require('gulp');
var newer = require('gulp-newer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var addsrc = require('gulp-add-src');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

/**
 *******************************************************
 * Paths
 *******************************************************
 */
var meta = {
    bower: 'bower_components/',
    src: {
        css: 'src/css/',
        js: 'src/js/',
        lib: 'src/lib/',
        fonts: 'src/fonts/'
    },
    dist: {
        css: 'dist/css/',
        js: 'dist/js/',
    }
};

/**
 *******************************************************
 * My files
 *******************************************************
 */

/**
 * Js
 */
gulp.task('main:js', function() {
    return gulp.src(
        [
            meta.src.lib + 'jquery/jquery.min.js',
            meta.src.lib + 'fotorama/fotorama.min.js',
            meta.src.lib + 'selectize/selectize.min.js',
            meta.src.js  + '*.js',
            '!' + meta.src.js + '\!*.js'
        ]
    )
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(meta.dist.js));
});

/**
 * Css
 */
gulp.task('main:css', function() {
    return gulp.src(
        [
            // Шрифты:
            meta.src.css + 'fonts/*.less',
            // Глобальные стили:
            meta.src.css + 'global/*.less',
            // Блоки:
            meta.src.css + 'blocks/*.less',
            // Игнорирование:
            '!' + meta.src.css + '**/\!*.less'
        ]
    )
        // Добавляем к каждому less-файлу переменные и миксины:
        .pipe(insert.prepend(''
            // Переменные:
            + '@import (less) "' + meta.src.css + 'variables/media-queries.less";\n'
            // Миксины:
        ))
        // Каждый less-файл переводим в Css:
        .pipe(less())
        // Добавляем в самое начало стили библиотек:
        .pipe(addsrc.prepend(
            [
                meta.src.lib + 'normalize/normalize.min.css'
            ]
        ))
        // Склеиваем все файлы:
        .pipe(concat('main.min.css'))
        // Добавляем префиксы css-свойствам:
        .pipe(autoprefixer())
        // Минифицируем:
        .pipe(csso())
        // Сохраняем:
        .pipe(gulp.dest(meta.dist.css));
});

/**
 * Build
 */
gulp.task('main', gulp.series(
    'main:js',
    'main:css'
));


// gulp.watch(meta.src.css + 'common.css', gulp.series('main:css'));
// gulp.watch(meta.src.js + 'common.js', gulp.series('main:js'));