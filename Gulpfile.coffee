gulp         = require 'gulp'
sass         = require 'gulp-sass'
autoprefixer = require 'gulp-autoprefixer'
cssmin       = require 'gulp-cssmin'
jade         = require 'gulp-jade'
minifyHTML   = require 'gulp-minify-html'
imagemin     = require 'gulp-imagemin'
pngquant     = require 'imagemin-pngquant'
watch        = require 'gulp-watch'
connect      = require 'gulp-connect'
coffee       = require 'gulp-coffee'
uglify       = require 'gulp-uglify'
gutil        = require 'gulp-util'
del          = require 'del'
icons        = require 'evil-icons'


gulp.task 'css', ->
  gulp.src 'src/app.scss'
    .pipe sass()
    .pipe autoprefixer()
    .pipe cssmin(keepSpecialComments: 0)
    .pipe gulp.dest('assets')
    .pipe connect.reload()


gulp.task 'html', ->
  gulp.src 'src/index.jade'
    .pipe jade()
    .pipe minifyHTML()
    .pipe gulp.dest('./')
    .pipe connect.reload()


gulp.task 'images', ->
  gulp.src 'src/images/*'
    .pipe imagemin
      progressive: true
      svgoPlugins: [{ removeViewBox: false }]
      use: [pngquant()]
    .pipe gulp.dest('assets/images')
    .pipe connect.reload()


gulp.task 'coffee', ->
  gulp.src 'src/app.coffee'
    .pipe coffee({bare: true}).on('error', gutil.log)
    .pipe uglify()
    .pipe gulp.dest('assets')
    .pipe connect.reload()


gulp.task 'server', ['watch'], ->
  connect.server(root: 'build', livereload: true)


gulp.task 'watch', ->
  gulp.watch('src/**', ['build'])


gulp.task 'clean', (cb) ->
  del 'index.html', cb
  del 'assets', cb


gulp.task 'build', ['images', 'css', 'coffee', 'html']
gulp.task 'default', ['build', 'server']

