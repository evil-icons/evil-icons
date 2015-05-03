var assert  = require('assert');
var icons   = require('../index');

function svg(icon) {
  var svg = '<svg class="icon__cnt">' +
              '<use xlink:href="#ei-' + icon + '-icon" />' +
            '</svg>';
  return svg;
}

describe('icon', function() {

  it('renders', function() {
    var actual    = icons.icon('ei-search');
    var expected  = '<div class="icon icon--ei-search">' +
                      svg('search') +
                    '</div>';

    assert.equal(actual, expected);
  });

  it('accepts size', function() {
    var actual    = icons.icon('ei-search', {size: 'l'});
    var expected  = '<div class="icon icon--ei-search icon--l">' +
                      svg('search') +
                    '</div>';

    assert.equal(actual, expected);
  });

  it('accepts single class', function() {
    var actual    = icons.icon('ei-search', {class: 'foo'});
    var expected  = '<div class="icon icon--ei-search foo">' +
                      svg('search') +
                    '</div>';

    assert.equal(actual, expected);
  });

  it('accepts multiple classes', function() {
    var actual    = icons.icon('ei-search', {class: 'foo bar'});
    var expected  = '<div class="icon icon--ei-search foo bar">' +
                      svg('search') +
                    '</div>';

    assert.equal(actual, expected);
  });

  it('wraps spinners', function() {
    var actual    = icons.icon('ei-spinner');
    var expected  = '<div class="icon icon--ei-spinner">' +
                      '<div class="icon__spinner">' +
                        svg('spinner') +
                      '</div>' +
                    '</div>';

    assert.equal(actual, expected);
  });

});
