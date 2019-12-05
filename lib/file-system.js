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

// const callback = (err, files) => {
//   console.log(files);
// };

// const readDirectoryJSON = (path) => {
//     fs.readdir(path, callback)
//         .then(() => []);
// };

// // we know that this will probably use readJSON, but how and where?

// const updateJSON = (path, object) => {
//     fs.writeFile()
//         .then(() => {});
// };

// // We think that this will also use writeFile and just overwrite the object with new properties, but how to make it just overwrite one part (age)?

const deleteFile = (path) => {
  fs.rmdir(path);
};

module.exports = {
  mkdirp,
  // writeJSON,
  // readJSON,
  //   readDirectoryJSON,
  //   updateJSON,
  deleteFile
};
