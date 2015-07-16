import sprite from './sprite';
import icon   from './icon';

function buildParamsFromString(string) {
  let match, attr, value;
  const params = {};
  const attrsRegexp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi;

  while (match = attrsRegexp.exec(string)) {
    [, attr, value] = match;
    params[attr] = value.replace(/'|"/, '');
  }

  return params;
}

function replaceIconTags(src) {
  let match, tag, params, name;
  let html = src.toString();
  const iconRegexp = /<icon\s+([-=\w\d'"\s]+)\s*\/?>(<\/icon>)?/gi;

  while (match = iconRegexp.exec(html)) {
    tag     = match[0];
    params  = buildParamsFromString(match[1]);
    name    = params.name;

    delete params.name;

    html = html.replace(tag, icon(name, params));
  }

  return html;
}

function iconizeHtml(src) {
  let html = src.toString();

  if (html.indexOf(sprite()) === -1) {
    html = html.replace(/<body.*?>/, match => match + sprite());
  }

  return replaceIconTags(html);
}

export default iconizeHtml;
