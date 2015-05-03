var libxml = require('libxmljs');

function doc(html) {
  var html    = html || '';
  var result  = '<!DOCTYPE html><html>' +
                '<head><title>Evil Icons</title></head>' +
                html + '</html>';
  return result;
}

function find(html, xpath) {
  var parsedHtml = libxml.parseHtmlString(html);
  return parsedHtml.find(xpath);
}

module.exports = {
  doc: doc,
  find: find
}
