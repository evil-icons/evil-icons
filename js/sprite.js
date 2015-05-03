var fs          = require('fs');
var spritePath  = __dirname + '/../assets/sprite.svg';
var spriteSVG   = fs.readFileSync(spritePath).toString();

function sprite() {
  return spriteSVG;
}

module.exports = sprite;

