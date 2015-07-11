var fs     = require('fs');
var path   = require('path');
var libxml = require('libxmljs');
var SVGO   = require('svgo');

var iconsPath = path.resolve(__dirname, '../assets/icons');
var svgo      = new SVGO({ plugins: [{ mergePaths: false }] });

function optimizeIcon(icon) {
  var processed = false;

  svgo.optimize(icon.content, function(optimized) {
    icon.content = optimized.data;
    processed = true;
  });

  while (true) {
    if (processed) break;
  }

  return icon;
}

function transformIcon(icon) {
  var svg     = libxml.parseHtmlString(icon.content);
  var root    = svg.find('//svg')[0];
  var viewBox = root.attr('viewbox').value();
  var content = root
    .childNodes()
    .map(function(node) { return node.toString() })
    .join('');

  var symbol =  '<symbol id="' + icon.name + '" viewBox="' + viewBox + '">' +
                  content +
                '</symbol>';

  return symbol;
}

function readIcon(file) {
  var filepath  = path.join(iconsPath, file);
  var content   = fs.readFileSync(filepath);

  return {
    name:    path.basename(file, '.svg'),
    content: content.toString()
  };
}

function sprite() {
  var files   = fs.readdirSync(iconsPath);
  var sprite  = '<svg xmlns="http://www.w3.org/2000/svg"' +
                'xmlns:xlink="http://www.w3.org/1999/xlink"' +
                'id="ei-sprite" style="display:none">';

  sprite += files
    .map(readIcon)
    .map(optimizeIcon)
    .map(transformIcon)
    .join('');

  sprite += '</svg>';

  return sprite;
}

module.exports = sprite;
