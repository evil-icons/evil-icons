import path     from 'path';
import assert   from 'assert';
import { find } from './test-helpers';
import icons    from '../index';

describe('sprite', () => {

  it('renders', () => {
    const sprite = find(icons.sprite(), '//svg[@id="ei-sprite"]');
    assert(sprite.length == 1);
  });

  it('has icons', () => {
    const symbols = find(icons.sprite(), '//symbol');
    assert.notEqual(symbols.length, 0);
  });

  it('renders icons from params array', () => {
    const sprite = icons.sprite(['ei-archive', 'ei-cart']);

    assert.equal(find(sprite, '//symbol').length, 2);
    assert.equal(find(sprite, '//symbol[@id="ei-archive"]').length, 1)
    assert.equal(find(sprite, '//symbol[@id="ei-cart"]').length, 1)
    assert.equal(find(sprite, '//symbol[@id="ei-search"]').length, 0)
  });

  it('renders icons from custom dir', () => {
    icons.setDirs(path.join(__dirname, './data'));
    const sprite = icons.sprite(['ei-archive', 'archive']);

    assert.equal(find(sprite, '//symbol[@id="ei-archive"]').length, 1)
    assert.equal(find(sprite, '//symbol[@id="archive"]').length, 1)
  });

});
