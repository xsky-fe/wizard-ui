const fs = require('fs-extra');

const filterFunc = (src, dest) => {
  if (src.includes('.tsx')) {
    return false;
  }
  return true;
};
fs.copy('src/style', 'lib/style');
fs.copy('src/components', 'lib/components', { filter: filterFunc }, err => {
  if (err) return console.error (err);
  console.log ('Copy success!');
});

