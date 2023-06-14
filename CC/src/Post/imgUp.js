'use strict';

const { Storage } = require('@google-cloud/storage');
const path = require('path');

const pathKey = path.resolve('../../serviceaccountkey.json');

const gcs = new Storage({
  projectId: 'sorak-c23-ps056',
  keyFilename: pathKey,
});

const bucketName = 'sorak-bucket';
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

let ImgUpload = {};

ImgUpload.uploadToGcs = (req, res, next) => {
  if (!req.file) return next();

  import('dateformat').then((dateFormat) => {
    const gcsname = dateFormat(new Date(), 'yyyymmdd-HHMMss');
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    stream.on('error', (err) => {
      req.file.cloudStorageError = err;
      next(err);
    });

    stream.on('finish', () => {
      req.file.cloudStorageObject = gcsname;
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
      next();
    });

    stream.end(req.file.buffer);
  }).catch((error) => {
    console.error('Error importing dateformat:', error);
    next(error);
  });
};

module.exports = ImgUpload;
