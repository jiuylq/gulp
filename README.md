## Gulp 脚本架配置

### 基本配置

*gulp 3.9.1的版本有点旧了，找时间升级一下*

> 本脚本家集成es6转es5的功能，sass/less预处理器编译功能，自动添加兼容前缀autoprefixer，开启本地服务器同步刷新网页等功能


gulp 脚本架共引入了以下功能：

* del // del
* gulp-babel // ES6转ES5
* gulp-uglify // js压缩
* gulp-concat // 文件合并
* gulp-sass // sass
* gulp-autoprefixer // 添加兼容前缀
* gulp-rev // 添加hash
* gulp-rev-collector // 根据json信息修改html中的外链链接
* gulp-rename // 重命名
* gulp-sourcemaps // sourcemaps
* gulp-imagemin // 压缩图片
* gulp-minify-html // 压缩html
* gulp-base64 // 转base64
* gulp-csso // 优化css
* gulp-less // less
* gulp-useref // 根据HTML中标注的文件名修改标注中的链接
* gulp-zip // zip压缩
* run-sequence // 逐个执行任务
* gulp-livereload 网页自动刷新（服务器控制客户端同步刷新）
* gulp-webserver // 开启本地server

### 使用

开启本地服务器并监听资源更新：
``` base
$ gult dev
```

打包发布：

``` base
$ gulp build
```