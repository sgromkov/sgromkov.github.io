'use strict';

/**
 *******************************************************
 * Modules
 *******************************************************
 */
var gulp = require('gulp');
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
    node_modules: 'node_modules/',
    src: {
        css: 'assets/src/css/',
        js: 'assets/src/js/',
        lib: 'assets/src/lib/',
        fonts: 'assets/src/fonts/'
    },
    dist: 'assets/dist/'
};

/**
 *******************************************************
 * My files
 *******************************************************
 */

/**
 * Css
 */
gulp.task('css', function() {
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
            + '@import (less) "' + meta.src.css + 'variables/mixins.less";\n'
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
        .pipe(gulp.dest(meta.dist));
});

/**
 * Build
 */
gulp.task('default', gulp.series(
    'css'
));

gulp.watch(meta.src.css + '**', gulp.series('css'));