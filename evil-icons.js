var fs          = require('fs');
var spritePath  = __dirname + '/assets/sprite.svg';
var sprite      = fs.readFileSync(spritePath).toString();
var icon        = require('./icon');;

function buildParamsFromString(string) {
  var match, attr, value;
  var params = {};
  var attrsRegexp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi;

  while (match = attrsRegexp.exec(string)) {
    attr  = match[1];
    value = match[2].replace(/'|"/, '');
    params[attr] = value;
  }

  return params;
}

function replaceIconTags(src) {
  var match, tag, params, name;
  var html = src.toString();
  var iconRegexp = /<icon\s+([-=\w\d'"\s]+)\s*\/?>(<\/icon>)?/gi;

  while (match = iconRegexp.exec(html)) {
    tag     = match[0];
    params  = buildParamsFromString(match[1]);
    name    = params.name;

    delete params.name;

    html = html.replace(tag, icon(name, params));
  }

  return html;
}

function iconizeHtml(src) {
  var html = src.toString();

  if (html.indexOf(sprite) == -1) {
    html = html.replace(/<body.*?>/, function(match) { return match + sprite });
  }

  return replaceIconTags(html);
}

module.exports = {
  iconizeHtml:  iconizeHtml,
  sprite:       sprite,
  icon:         icon
};
