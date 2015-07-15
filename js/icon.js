function getClasses(name, options) {
  const size = options.size ? ` icon--${ options.size }` : '';
  const customClass = options.class || '';
  return `icon icon--${ name }${ size } ${ customClass }`.trim();
}

function wrapSpinner(html, classes) {
  if (classes.indexOf('spinner') == -1) return html;
  return `<div class="icon__spinner">${ html }</div>`;
}

function icon(name, options = {}) {
  const classes = getClasses(name, options);
  const icon    = '<svg class="icon__cnt">' +
                    `<use xlink:href="#${ name }-icon" />` +
                  '</svg>';
  const inner   = wrapSpinner(icon, classes);

  return `<div class="${ classes }">${ inner }</div>`;
}

export default icon;
