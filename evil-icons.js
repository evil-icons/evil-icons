module.exports = {

  sprite: fs.readFileSync("./app/views/evil_icons/_icons.erb").toString(),

  icon: function icon(name, options) {
    var options = options || {};
    var size    = options.size ? "icon--" + options.size : "";
    var klass   = "icon icon--" + name + " " + size + " " + (options.class || "");

    var html = "<div class='" + klass + "'><svg class='icon__cnt'>" +
               "<use xlink:href='#" + name + "-icon' />" +
               "</svg></div>";

    return html;
  }

};
