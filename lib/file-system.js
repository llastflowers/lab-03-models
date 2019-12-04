const fs = require('fs').promises;

const mkdirp = (path) => {
    fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, object) => {
    fs.writeFile(path, JSON.stringify(object))
        .then(() => object);
};

const readJSON = (path) => {
    fs.readFile(path)
        .then((object) => JSON.parse(object));

};

const readDirectoryJSON = (path) => {

};

module.exports = {
    mkdirp,
    writeJSON,
    readJSON,
    readDirectoryJSON,
};