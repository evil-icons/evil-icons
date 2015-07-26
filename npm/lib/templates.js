function symbol({ name, viewBox, content }) {
  return `<symbol id="${ name }" viewBox="${ viewBox }">${ content }</symbol>`;
}

function sprite(symbols) {
  return '<svg xmlns="http://www.w3.org/2000/svg"' +
         'xmlns:xlink="http://www.w3.org/1999/xlink"' +
         `id="ei-sprite" style="display:none">${ symbols }</svg>`;
}

export default { symbol, sprite };
