var icon      = require('./icon');
var sprite    = require('./sprite');
var iconizer  = require('./iconizer');
var files     = require('./files');

module.exports = {
  iconizeHtml:  iconizer,
  sprite:       sprite,
  icon:         icon,
  setDirs:      files.setDirs
};
