import fs   from 'fs';
import path from 'path';

const iconsPath = path.resolve(__dirname, '../assets/icons');
let iconsDirs   = [iconsPath];

function existingFiles(files) {
  // FIXME: fs.existsSync is deprecated
  return files.filter(file => fs.existsSync(file));
}

function normalizeNames(icons) {
  let names = icons || [];
  if (typeof names === 'string') names = [names];

  if (!names.length) {
    dirs().forEach(dir => names.push(...fs.readdirSync(dir)));
  }

  return names;
}

function constructPath(dir, file) {
  // Remove extension if exists to prevent duplication
  const basename = path.basename(file, '.svg');
  return path.join(dir, `${ basename }.svg`);
}

function paths(icons) {
  const paths = [];
  const names = normalizeNames(icons);

  dirs().forEach((dir) => {
    names.forEach(icon => paths.push(constructPath(dir, icon)));
  });

  return existingFiles(paths);
}

function dirs() {
  return [...iconsDirs];
}

function setDirs(dir) {
  if (typeof dir === 'string') dir = [dir];
  iconsDirs = [iconsPath].concat(dir);
}

export default { dirs, setDirs, paths };
