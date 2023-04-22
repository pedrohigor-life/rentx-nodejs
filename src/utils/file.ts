import fs from 'fs';

export const deleteFile = (filename: string) => {
  fs.stat(filename, function (err, stats) {
    if (err) return console.log(err);

    fs.unlink(filename, function (err) {
      if (err) return console.log(err);
    });
  });
};
