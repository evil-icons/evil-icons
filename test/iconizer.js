var assert  = require('assert');
var doc     = require('./test-helpers').doc;
var find    = require('./test-helpers').find;
var icons   = require('../index');

describe('iconizeHtml', function() {

  it('keeps doctype', function() {
    var html = icons.iconizeHtml(doc('<body></body>'));
    assert(html.indexOf('<!DOCTYPE html>') > -1);
  });

  it('renders sprite', function() {
    var html    = icons.iconizeHtml(doc('<body></body>'));
    var sprite  = find(html, '//svg[@id="ei-sprite"]');

    assert(sprite.length == 1);

    html    = icons.iconizeHtml(doc('<body class=red data-attr="a">\n</body>'));
    sprite  = find(html, '//svg[@id="ei-sprite"]');

    assert(sprite.length == 1);
  });

  it('doesn\'t render sprite twice', function() {
    var html    = icons.iconizeHtml(doc('<body> </body>'));
    html        = icons.iconizeHtml(html);
    var sprite  = find(html, '//svg[@id="ei-sprite"]');

    assert(sprite.length == 1);
  });

  it('replaces single icon tag', function() {
    var html  = doc('<body> <icon name="ei-archive" /> </body>');
    html      = icons.iconizeHtml(html);
    var icon  = find(html, '//div[@class="icon icon--ei-archive"]');

    assert(icon.length == 1);
  });

  it('replaces multiple icon tags', function() {
    var html = doc(
      '<body>' +
      '<p>Some&nbsp;entities</p>\n' +
      '<icon name="ei-archive" />\n' +
      '<a href="http://evil-icons.io">Evil Icons</a>\n' +
      '<icon name="ei-search" />\n' +
      '</body>'
    );

    html        = icons.iconizeHtml(html);
    var first   = find(html, '//div[@class="icon icon--ei-archive"]');
    var second  = find(html, '//div[@class="icon icon--ei-search"]');

    assert(first.length == 1, 'First icon failed');
    assert(second.length == 1, 'Second icon failed');
  });

  it('respects icon size attr', function() {
    var html  = doc('<body> <icon name="ei-archive" size="l" /> </body>');
    html      = icons.iconizeHtml(html);
    var icon  = find(html, '//div[@class="icon icon--ei-archive icon--l"]');

    assert(icon.length == 1);
  });

  it('respects classes', function() {
    var html = doc(
      '<body>' +
      '<icon name="ei-archive" class="foo" />' +
      '<icon name="ei-archive" class="foo bar" />' +
      '</body>'
    );

    html        = icons.iconizeHtml(html);
    var foo     = find(html, '//div[@class="icon icon--ei-archive foo"]');
    var foobar  = find(html, '//div[@class="icon icon--ei-archive foo bar"]');

    assert(foo.length == 1, 'Single class failed');
    assert(foobar.length == 1, 'Multiple classes failed');
  });

});
