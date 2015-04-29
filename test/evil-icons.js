var assert  = require('assert');
var icons   = require('../evil-icons');

describe('Evil Icons', function() {

  describe('icon', function() {

    function svg(icon) {
      var svg = '<svg class="icon__cnt">' +
                  '<use xlink:href="#ei-' + icon + '-icon" />' +
                '</svg>';
      return svg;
    }

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

  describe('iconizeHtml', function() {

    function doc(html) {
      var head = '<!DOCTYPE html><html><head><title>Evil Icons</title></head>';
      return head + html;
    }

    function docWithSprite(html) {
      return doc('<body>' + icons.sprite + html + '</body>');
    }

    it('renders sprite', function() {
      var actual    = icons.iconizeHtml(doc('<body> </body>'));
      var expected  = doc('<body>' + icons.sprite + ' </body>');

      assert.equal(actual, expected);

      actual    = icons.iconizeHtml(doc('<body class=red> </body>'));
      expected  = doc('<body class=red>' + icons.sprite + ' </body>');

      assert.equal(actual, expected);

      actual    = icons.iconizeHtml(doc('<body class=red data-attr="a"> </body>'));
      expected  = doc('<body class=red data-attr="a">' + icons.sprite + ' </body>');

      assert.equal(actual, expected);
    });

    it('doesn\'t render sprite twice', function() {
      var expected  = doc('<body>' + icons.sprite + ' </body>');
      var actual    = icons.iconizeHtml(doc('<body> </body>'));
      actual        = icons.iconizeHtml(actual);

      assert.equal(actual, expected);
    });

    it('replaces single icon tag', function() {
      var html      = docWithSprite('<icon name="ei-archive" />');
      var actual    = icons.iconizeHtml(html);
      var expected  = docWithSprite(icons.icon('ei-archive'));

      assert.equal(actual, expected);
    });

    it('replaces multiple icon tags', function() {
      var html = docWithSprite(
        '<p>Some&nbsp;entities</p>\n' +
        '<icon name="ei-archive" />\n' +
        '<a href="http://evil-icons.io>Evil Icons</a>\n' +
        '<icon name="ei-search" />\n'
      );

      var expected  = docWithSprite(
        '<p>Some&nbsp;entities</p>\n' +
        icons.icon('ei-archive') + '\n' +
        '<a href="http://evil-icons.io>Evil Icons</a>\n' +
        icons.icon('ei-search') + '\n'
      );

      var actual = icons.iconizeHtml(html);

      assert.equal(actual, expected);
    });

    it('respects icon size attr', function() {
      var html      = docWithSprite('<icon name="ei-archive" size="l" />');
      var actual    = icons.iconizeHtml(html);
      var expected  = docWithSprite(icons.icon('ei-archive', {size: 'l'}));

      assert.equal(actual, expected);
    });

  });

});
