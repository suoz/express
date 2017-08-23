var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename'); //重命名
var uglify = require('gulp-uglify'); //压缩js
var babel = require('gulp-babel'); //es6
var cssnano = require('gulp-cssnano'); //压缩css
var concat = require('gulp-concat'); //合并
var livereload = require('gulp-livereload'); //自动刷新
var server = require('gulp-server-livereload');

var paths = {
    'scripts': [
        './public/js/admin.js'
    ],
    'styles': [
        './public/css/app.css'
    ],
    'other-script': [
        './public/js/bootstrap.js',
        './public/js/moment.js'
    ],
    'other-styles': [
        './public/bootstrap.css',
        './public/normalize.css'
    ]
};

// 用gulp命令替换npm start
gulp.task('start', shell.task('npm start'));

// 压缩js
gulp.task('js', function(){
    return gulp.src(paths.scripts)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});

// 压缩css
gulp.task('css', function(){
    return gulp.src(paths.styles)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css/'))
});

// 监听任务
gulp.task('watch', function(){
    gulp.watch([paths.scripts], ['js'])
    gulp.watch([paths.styles], ['css'])
});

// // 监听所有打包之后的文件变动，自动刷新页面
// gulp.task('livereload', function(){
//     livereload.listen();
//     gulp.watch(['./public/**']).on('change', livereload.changed);
// });

// gulp.task('watch', function(){
//     // 建立浏览器自动刷新服务器
//     browserSync.init({
//         server: {
//             baseDir: './public/admin.html'
//         }
//     });
//     //自动刷新
//     gulp.watch('./public/js/**', function(){
//         browserSync.reload();
//     });
// });

gulp.task('default',['start','js','css','watch'] ,function(){
    console.log('hello gulp');
    // gulp.src('./')
    //     .pipe(server({
    //         livereload: true,
    //         defaultFile: "admin.html"
    //     }));
});

