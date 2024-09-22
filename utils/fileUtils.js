const mime = require('mime-types');

exports.validateFile = (fileBase64) => {
  try {
    const buffer = Buffer.from(fileBase64, 'base64');
    const mimeType = mime.lookup(buffer);
    const fileSizeKB = Buffer.byteLength(buffer) / 1024;

    return {
      file_valid: true,
      file_mime_type: mimeType,
      file_size_kb: Math.round(fileSizeKB)
    };
  } catch (error) {
    return {
      file_valid: false,
      file_mime_type: null,
      file_size_kb: null
    };
  }
};
