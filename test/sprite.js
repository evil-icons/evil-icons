var assert = require('assert');
var find   = require('./test-helpers').find;
var icons  = require('../index');

describe('sprite', function() {

  it('renders', function() {
    var sprite = find(icons.sprite(), '//svg[@id="ei-sprite"]');
    assert(sprite.length == 1);
  });

  it('has icons', function() {
    var symbols = find(icons.sprite(), '//symbol');
    assert(symbols.length > 0);
  });

});
