// after all delete newly created directories and files
const fs = require('fs').promises;

const {
  mkdirp,
  deleteFile
} = require('../lib/file-system.js');

describe('file system', () => {
    
  it('makes a directory', () => {
    mkdirp('./my-directory');
    fs.readdir('./my-directory', (err, files) => {
      expect(Array.isArray(files)).toBeTruthy();
    });
  });

  it('deletes a file', () => {
    deleteFile('./my-directory');
    fs.rmdir('./my-directory', (err, files) => {
      expect(Array.isArray(files)).toBeFalsy();
    });
  });

//   afterAll(() => {
//     return deleteFile();
//   });
});
