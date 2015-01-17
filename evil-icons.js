var fs          = require('fs');
var spritePath  = __dirname + "/assets/sprite.svg";
var sprite      = fs.readFileSync(spritePath).toString();


function icon(name, options) {
  var options = options || {};
  var size    = options.size ? "icon--" + options.size : "";
  var klass   = "icon icon--" + name + " " + size + " " + (options.class || "");


  var icon =  "<svg class='icon__cnt'>" +
                "<use xlink:href='#" + name + "-icon' />" +
              "</svg>";

  var html =  "<div class='" + klass + "'>" +
                wrapSpinner(icon, klass) +
              "</div>";

  return html;
}


function wrapSpinner(html, klass) {
  if (klass.indexOf("spinner") > -1) {
    return "<div class='icon__spinner'>" + html + "</div>";
  } else {
    return html;
  }
}


function buildParamsFromString(string) {
  var paramsString;
  var params = {};
  var string = string.trim().replace(/['"]/gi, '');

  string.split(' ').forEach(function(param){
    var param = param.split('=');
    var key   = param[0];
    var value = param[1];

    params[key] = value;
  });

  return params;
}


function replaceIconTags(src) {
  var match, tag, params, name;
  var html = src.toString();
  var iconRegexp  = /<icon\s+([-=\w\d'"\s]+)\s*\/?>(<\/icon>)?/gi;

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
  var html  = src.toString();
  html = html.replace(/<body.*?>/, function(match) { return match + sprite });
  return replaceIconTags(html);
}


module.exports = {
  iconizeHtml:  iconizeHtml,
  sprite:       sprite,
  icon:         icon
};
