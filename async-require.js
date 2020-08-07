const asyncRequire = (path) =>
  new Promise(resolve =>
    setTimeout(() => resolve(require(path))));

module.exports = asyncRequire;
