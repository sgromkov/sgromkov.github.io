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
var react = require('gulp-react');

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
    dist: {
        css: 'assets/dist/css/',
        js: 'assets/dist/js/',
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
gulp.task('old', function() {
    return gulp.src(
        [
            // meta.node_modules + 'react/dist/react.min.js',
            // meta.node_modules + 'react-dom/dist/react-dom.min.js',
            meta.node_modules + 'react/dist/react.js',
            meta.node_modules + 'react-dom/dist/react-dom.js',
            meta.src.js  + '*.js',
            '!' + meta.src.js + '\!*.js'
        ]
    )
        .pipe(concat('main.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(meta.dist.js));
});

gulp.task("js", function () {
    return gulp.src(meta.src.js + "*.jsx")
        .pipe(react())
        .pipe(addsrc.prepend(
            [
                // meta.node_modules + 'react/dist/react.min.js',
                // meta.node_modules + 'react-dom/dist/react-dom.min.js',
                meta.node_modules + 'react/dist/react.js',
                meta.node_modules + 'react-dom/dist/react-dom.js',
                meta.src.js  + '*.js',
                '!' + meta.src.js + '\!*.js'
            ]
        ))
        .pipe(concat('main.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(meta.dist.js));
});

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
gulp.task('default', gulp.series(
    'js',
    'css'
));

// gulp.watch(meta.src.css + 'common.css', gulp.series('main:css'));
// gulp.watch(meta.src.js + 'portfolio.jsx', gulp.series('js'));