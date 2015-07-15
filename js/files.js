var fs     = require('fs');
var path   = require('path');

var iconsPath = path.resolve(__dirname, '../assets/icons');
var iconsDirs = [iconsPath];

function existingFiles(files) {
  return files.filter(function(file) { return fs.existsSync(file) });
}

function normalizeNames(icons) {
  var names = icons ? icons : [];
  if (typeof names == 'string') names = [names];

  if (names.length == 0) {
    dirs().forEach(function(dir) {
      var files = fs.readdirSync(dir);
      names = names.concat(files);
    })
  }

  return names;
}

function constructPath(dir, file) {
  var basename = path.basename(file, '.svg');
  return path.join(dir, basename + '.svg');
}

function paths(icons) {
  var paths     = [];
  var iconNames = normalizeNames(icons);

  dirs().forEach(function(dir) {
    iconNames.forEach(function(icon) {
      var path = constructPath(dir, icon);
      paths.push(path);
    });
  });

  return existingFiles(paths);
}

function dirs() {
  return iconsDirs.slice();
}

function setDirs(dir) {
  if (typeof dir == 'string') dir = [dir];
  iconsDirs = [iconsPath].concat(dir);
}

module.exports = {
  dirs:     dirs,
  setDirs:  setDirs,
  paths:    paths
}
