var gulp = require('gulp'),
	less = require('gulp-less');

//定义less任务
gulp.task('less',function(){
	gulp.src('src/index.less')//该任务针对模块
	.pipe(less())//调用模块
	.pipe(gulp.dest('src'));//目录src下生成index.css
});
gulp.task('default',['less']);//定义默认任务
gulp.task('lessWatch',function(){//监听
	gulp.watch('src/index.less',['less']);//当less修改时执行less任务
});