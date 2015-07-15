import fs     from 'fs';
import path   from 'path';
import libxml from 'libxmljs';
import SVGO   from 'svgo';
import files  from './files';

const svgo = new SVGO({ plugins: [{ mergePaths: false }] });

function optimizeIcon(icon) {
  let processed = false;

  svgo.optimize(icon.content, (optimized) => {
    icon.content = optimized.data;
    processed = true;
  });

  while (true) {
    if (processed) break;
  }

  return icon;
}

function transformIcon(icon) {
  const svg     = libxml.parseHtmlString(icon.content);
  const root    = svg.find('//svg')[0];
  const viewBox = root.attr('viewbox').value();
  const content = root
    .childNodes()
    .map(node => node.toString())
    .join('');

  var symbol =  `<symbol id="${ icon.name }" viewBox="${ viewBox }">` +
                  content +
                '</symbol>';

  return symbol;
}

function readIcon(file) {
  return {
    name:    path.basename(file, '.svg'),
    content: fs.readFileSync(file).toString()
  };
}

function sprite(icons) {
  var symbols = files
    .paths(icons)
    .map(readIcon)
    .map(optimizeIcon)
    .map(transformIcon)
    .join('');

  var sprite = '<svg xmlns="http://www.w3.org/2000/svg"' +
                'xmlns:xlink="http://www.w3.org/1999/xlink"' +
                `id="ei-sprite" style="display:none">${ symbols }</svg>`;

  return sprite;
}

export default sprite;
