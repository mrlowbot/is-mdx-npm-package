const fs = require('fs');
const path = require('path');

function isMdx(filePath) {
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return false;
  }

  // Get the file extension
  const ext = path.extname(filePath);

  // Return true if the file is an .mdx file, and false otherwise
  return ext === '.mdx';
}

module.exports = isMdx;
