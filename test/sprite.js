var path   = require('path');
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
    assert.notEqual(symbols.length, 0);
  });

  it('renders icons from params array', function() {
    var sprite = icons.sprite(['ei-archive', 'ei-cart']);

    assert.equal(find(sprite, '//symbol').length, 2);
    assert.equal(find(sprite, '//symbol[@id="ei-archive"]').length, 1)
    assert.equal(find(sprite, '//symbol[@id="ei-cart"]').length, 1)
    assert.equal(find(sprite, '//symbol[@id="ei-search"]').length, 0)
  });

  it('renders icons from custom dir', function() {
    icons.setDirs(path.join(__dirname, './data'));
    var sprite = icons.sprite(['ei-archive', 'archive']);

    assert.equal(find(sprite, '//symbol[@id="ei-archive"]').length, 1)
    assert.equal(find(sprite, '//symbol[@id="archive"]').length, 1)
  });

});
