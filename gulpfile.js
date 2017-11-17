
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// var copyHtml = require('gulp-html');
gulp.task("sass",function(){ 
    gulp.src('src/sass/*.scss')
    .pipe(sass().on("error",sass.logError))
    // .pipe(concat("min.css"))
    .pipe(gulp.dest('dist/css'))
})
gulp.task("imagemin",function(){
    gulp.src('src/img/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img'))
})
gulp.task("imagemin1",function(){
    gulp.src('src/img/1/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/1'))
})
gulp.task("imagemin2",function(){
    gulp.src('src/img/2/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/2'))
})
gulp.task("imagemin3",function(){
    gulp.src('src/img/3/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/3'))
})
gulp.task("imageminimg",function(){
    gulp.src('src/img/img/img/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/img/img'))
})
gulp.task("imagemina",function(){
    gulp.src('src/img/a/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/a'))
})
gulp.task("imageminb",function(){
    gulp.src('src/img/b/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/b'))
})
gulp.task("imagemini",function(){
    gulp.src('src/img/img/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/img'))
})
gulp.task("imagemintb",function(){
    gulp.src('src/img/tb/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/tb/'))
})
gulp.task("imagemintp",function(){
    gulp.src('src/img/tp/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/tp/'))
})
gulp.task("imageminl",function(){
    gulp.src('src/img/考拉/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/考拉/'))
})
gulp.task("imageminf",function(){
    gulp.src('src/img/太原美食,太原餐厅餐饮,太原团购,太原生活,优惠券-大众点评网.html2_files/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/太原美食,太原餐厅餐饮,太原团购,太原生活,优惠券-大众点评网.html2_files/'))
})
gulp.task("imageming",function(){
    gulp.src('src/img/图片/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/图片/'))
})
gulp.task("imagemingn",function(){
    gulp.src('src/img/video/*')
    .pipe(imagemin())
    
    .pipe(gulp.dest('dist/img/video/'))
})
gulp.task("html",function(){
    gulp.src('src/*.html')
    
    .pipe(gulp.dest('dist/'))

})
// gulp.task("svg",function(){
//     gulp.src('src/font/*.')
//     .pipe(svg())
//     .pipe(gulp.dest('dist/font'))

// })
// gulp.task("script",function(){
//     gulp.src('src/js/*.js')
    
//     .pipe(gulp.dest('dist/js'))
// })
gulp.task("default",["sass","imagemintp","html","scripts","imageminimg","imagemin","imagemingn","imageming","imageminf","imageminl","imagemintb","imagemini","imageminb","imagemina","imagemin2","imagemin1","imagemin3","watch","jquery"])
gulp.task("scripts",function(){
    gulp.src('src/js/*.js')
    // .pipe(concat("minjs"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
gulp.task("jquery",function(){
    gulp.src('src/js/jquery.js')
    // .pipe(concat("minjs"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
gulp.task("watch",function(){
    gulp.watch("src/js/*.js",['scripts'])
    gulp.watch("src/*.html",['html'])
    gulp.watch("src/sass/*.scss",['sass'])
    gulp.watch("src/images/*.",['imagemin'])
})