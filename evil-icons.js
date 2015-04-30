var fs          = require('fs');
var libxml      = require('libxmljs')
var spritePath  = __dirname + '/assets/sprite.svg';
var sprite      = fs.readFileSync(spritePath).toString();

function icon(name, options) {
  var options = options || {};
  var size    = options.size ? ' icon--' + options.size : '';
  var classes = 'icon icon--' + name + size + ' ' + (options.class || '');
  classes     = classes.trim();

  var icon =  '<svg class="icon__cnt">' +
                '<use xlink:href="#' + name + '-icon" />' +
              '</svg>';

  var html =  '<div class="' + classes + '">' +
                wrapSpinner(icon, classes) +
              '</div>';

  return html;
}

function wrapSpinner(html, klass) {
  if (klass.indexOf('spinner') > -1) {
    return '<div class="icon__spinner">' + html + '</div>';
  } else {
    return html;
  }
}

function replaceIconElement(element) {
  var name = element.attr('name').value();

  var params = {
    size:   element.attr('size') && element.attr('size').value(),
    class:  element.attr('class') && element.attr('class').value()
  };

  var newElement = libxml.parseHtmlString(icon(name, params));
  element.addNextSibling(newElement.find('//div')[0]);
  element.remove();
}

function replaceIconTags(src) {
  var html = src.toString();
  var doc  = libxml.parseHtmlString(html);

  doc.find('//icon').forEach(replaceIconElement);

  var result = doc
    .toString()
    .replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '')
    .trim();

  return result;
}

function iconizeHtml(src) {
  var html      = src.toString();
  var doc       = libxml.parseHtmlString(html);
  var noSprite  = doc.find('//svg[@id="ei-sprite"]').length == 0;

  html = replaceIconTags(html);

  if (noSprite) {
    html = html.replace(/<body.*?>/, function(match) { return match + sprite; });
  }

  return html;
}

module.exports = {
  iconizeHtml:  iconizeHtml,
  sprite:       sprite,
  icon:         icon
};
