module.exports = icon;

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
