import fs   from 'fs';
import path from 'path';

const iconsPath = path.resolve(__dirname, '../assets/icons');
let iconsDirs   = [iconsPath];

function existingFiles(files) {
  return files.filter(file => fs.existsSync(file));
}

function normalizeNames(icons) {
  let names = icons ? icons : [];
  if (typeof names == 'string') names = [names];

  if (names.length == 0) {
    dirs().forEach((dir) => {
      const files = fs.readdirSync(dir);
      names = names.concat(files);
    })
  }

  return names;
}

function constructPath(dir, file) {
  const basename = path.basename(file, '.svg');
  return path.join(dir, `${ basename }.svg`);
}

function paths(icons) {
  const paths = [];
  const names = normalizeNames(icons);

  dirs().forEach((dir) => {
    names.forEach((icon) => {
      const path = constructPath(dir, icon);
      paths.push(path);
    });
  });

  return existingFiles(paths);
}

function dirs() {
  return [...iconsDirs];
}

function setDirs(dir) {
  if (typeof dir == 'string') dir = [dir];
  iconsDirs = [iconsPath].concat(dir);
}

export default { dirs, setDirs, paths }
