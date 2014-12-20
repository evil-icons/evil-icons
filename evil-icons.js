var fs = require('fs');
var spritePath = __dirname + "/assets/sprite.svg";

var wrapSpinner = function (html, klass) {
  if (klass.indexOf("spinner") > -1) {
    return "<div class='icon__spinner'>" + html + "</div>";
  } else {
    return html;
  }
}


module.exports = {

  sprite: fs.readFileSync(spritePath).toString(),

  icon: function icon(name, options) {
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

};
