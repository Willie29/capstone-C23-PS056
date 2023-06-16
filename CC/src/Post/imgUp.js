'use strict';

const { Storage } = require('@google-cloud/storage');
const path = require('path');
const dayjs = require('dayjs');

const pathKey = path.resolve('./serviceaccountkey.json');

const gcs = new Storage({
  projectId: 'sorak-c23-ps056',
  keyFilename: pathKey,
});

const bucketName = 'sorak-bucket';
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

let ImgUpload = {};

ImgUpload.uploadToGcs = (attachment) => {
  return new Promise((resolve, reject) => {
    // if (!attachment) {
    //   reject('No attachment provided');
    //   return;
    // }

    const gcsname = dayjs().format('YYYYMMDD-HHmmss');
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
      metadata: {
        contentType: attachment.hapi.headers['content-type'],
      },
    });

    stream.on('error', (err) => {
      reject(err);
    });

    stream.on('finish', () => {
      resolve(getPublicUrl(gcsname));
    });

    stream.end(attachment._data);
  });
};

module.exports = ImgUpload;
