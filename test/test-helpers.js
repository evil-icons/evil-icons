import libxml from 'libxmljs';

function doc(html = '') {
  const result  = `<!DOCTYPE html><html>
                  <head><title>Evil Icons</title></head>
                  ${ html }
                  </html>`;
  return result;
}

function find(html, xpath) {
  const parsedHtml = libxml.parseHtmlString(html);
  return parsedHtml.find(xpath);
}

export default { doc, find }
