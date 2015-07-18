import assert        from 'assert';
import { doc, find } from './test-helpers';
import icons         from '../index';

describe('iconizeHtml', () => {

  it('keeps doctype', () => {
    const html = icons.iconizeHtml(doc('<body></body>'));
    assert.notEqual(html.indexOf('<!DOCTYPE html>'), -1);
  });

  it('renders sprite', () => {
    let html    = icons.iconizeHtml(doc('<body></body>'));
    let sprite  = find(html, '//svg[@id="ei-sprite"]');

    assert.equal(sprite.length, 1);

    html    = icons.iconizeHtml(doc('<body class=red data-attr="a">\n</body>'));
    sprite  = find(html, '//svg[@id="ei-sprite"]');

    assert.equal(sprite.length, 1);
  });

  it('doesn\'t render sprite twice', () => {
    let html      = icons.iconizeHtml(doc('<body> </body>'));
    html          = icons.iconizeHtml(html);
    const sprite  = find(html, '//svg[@id="ei-sprite"]');

    assert.equal(sprite.length, 1);
  });

  it('replaces single icon tag', () => {
    let html    = doc('<body> <icon name="ei-archive" /> </body>');
    html        = icons.iconizeHtml(html);
    const icon  = find(html, '//div[@class="icon icon--ei-archive"]');

    assert.equal(icon.length, 1);
  });

  it('replaces multiple icon tags', () => {
    let html = doc(
      '<body>' +
      '<p>Some&nbsp;entities</p>\n' +
      '<icon name="ei-archive" />\n' +
      '<a href="http://evil-icons.io">Evil Icons</a>\n' +
      '<icon name="ei-search" />\n' +
      '</body>'
    );

    html          = icons.iconizeHtml(html);
    const first   = find(html, '//div[@class="icon icon--ei-archive"]');
    const second  = find(html, '//div[@class="icon icon--ei-search"]');

    assert.equal(first.length, 1, 'First icon failed');
    assert.equal(second.length, 1, 'Second icon failed');
  });

  it('respects icon size attr', () => {
    let html    = doc('<body> <icon name="ei-archive" size="l" /> </body>');
    html        = icons.iconizeHtml(html);
    const icon  = find(html, '//div[@class="icon icon--ei-archive icon--l"]');

    assert.equal(icon.length, 1);
  });

  it('respects classes', () => {
    let html = doc(
      '<body>' +
      '<icon name="ei-archive" class="foo" />' +
      '<icon name="ei-archive" class="foo bar" />' +
      '</body>'
    );

    html          = icons.iconizeHtml(html);
    const foo     = find(html, '//div[@class="icon icon--ei-archive foo"]');
    const foobar  = find(html, '//div[@class="icon icon--ei-archive foo bar"]');

    assert.equal(foo.length, 1, 'Single class failed');
    assert.equal(foobar.length, 1, 'Multiple classes failed');
  });

});
