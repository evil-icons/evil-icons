import assert from 'assert';
import icons  from '../index';

function svg(icon) {
  const svg = '<svg class="icon__cnt">' +
                `<use xlink:href="#ei-${ icon }-icon" />` +
              '</svg>';
  return svg;
}

describe('icon', () => {

  it('renders', () => {
    const actual    = icons.icon('ei-search');
    const expected  = '<div class="icon icon--ei-search">' +
                        svg('search') +
                      '</div>';

    assert.equal(actual, expected);
  });

  it('accepts size', () => {
    const actual    = icons.icon('ei-search', {size: 'l'});
    const expected  = '<div class="icon icon--ei-search icon--l">' +
                        svg('search') +
                      '</div>';

    assert.equal(actual, expected);
  });

  it('accepts single class', () => {
    const actual    = icons.icon('ei-search', {class: 'foo'});
    const expected  = '<div class="icon icon--ei-search foo">' +
                        svg('search') +
                      '</div>';

    assert.equal(actual, expected);
  });

  it('accepts multiple classes', () => {
    const actual    = icons.icon('ei-search', {class: 'foo bar'});
    const expected  = '<div class="icon icon--ei-search foo bar">' +
                        svg('search') +
                      '</div>';

    assert.equal(actual, expected);
  });

  it('wraps spinners', () => {
    const actual    = icons.icon('ei-spinner');
    const expected  = '<div class="icon icon--ei-spinner">' +
                        '<div class="icon__spinner">' +
                          svg('spinner') +
                        '</div>' +
                      '</div>';

    assert.equal(actual, expected);
  });

});
