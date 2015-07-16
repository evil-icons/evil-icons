import fs        from 'fs';
import path      from 'path';
import libxml    from 'libxmljs';
import SVGO      from 'svgo';
import files     from './files';
import templates from './templates';

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
  const name    = icon.name;
  const svg     = libxml.parseHtmlString(icon.content);
  const root    = svg.find('//svg')[0];
  const viewBox = root.attr('viewbox').value();
  const content = root
    .childNodes()
    .map(node => node.toString())
    .join('');

  return templates.symbol({ name, viewBox, content });
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

  return templates.sprite(symbols);
}

export default sprite;
