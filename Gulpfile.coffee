gulp         = require 'gulp'
sass         = require 'gulp-ruby-sass'
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
fs           = require 'fs'
inline       = require('gulp-inline-base64')
data         = require('./data.json')


helpers =
  capitalize: (str) ->
    str
      .replace('ei-', '')
      .replace('sc-', '')
      .replace('-', ' ')
      .replace /(?:^|\s)\S/g, (s) -> s.toUpperCase()


iconsPath = './node_modules/evil-icons/app/assets/images/evil-icons'
iconNames = (icon.replace('.svg', '') for icon in fs.readdirSync iconsPath)
jadeVars  = {iconNames: iconNames, icons: icons, data: data, helpers: helpers}


gulp.task 'css', ->
  gulp.src 'src/app.scss'
    .pipe sass(quiet: true).on('error', gutil.log)
    .pipe inline(baseDir: './', debug: true)
    .pipe autoprefixer()
    .pipe cssmin(keepSpecialComments: 0)
    .pipe gulp.dest('assets')
    .pipe connect.reload()


gulp.task 'html', ->
  gulp.src 'src/index.jade'
    .pipe jade(locals: jadeVars)
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


gulp.task 'coffee', ->
  gulp.src 'src/app.coffee'
    .pipe coffee({bare: true}).on('error', gutil.log)
    .pipe uglify()
    .pipe gulp.dest('assets')
    .pipe connect.reload()


gulp.task 'server', ['watch'], ->
  connect.server(root: './', livereload: false)


gulp.task 'watch', ->
  gulp.watch('src/**', ['build'])


gulp.task 'clean', (cb) ->
  del 'index.html', cb
  del 'assets', cb


gulp.task 'build', ['images', 'css', 'coffee', 'html']
gulp.task 'default', ['build', 'server']

