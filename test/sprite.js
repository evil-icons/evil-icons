var assert  = require('assert');
var find    = require('./test-helpers').find;
var icons   = require('../index');

describe('sprite', function() {

  it('renders sprite', function() {
    var sprite = find(icons.sprite(), '//svg[@id="ei-sprite"]');
    assert(sprite.length == 1);
  });

});
