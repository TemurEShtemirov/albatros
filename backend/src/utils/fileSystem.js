const fs = require('fs');
const path = require('path');

function readFile(filePath, fileName) {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), filePath, fileName))
    );
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.stack };
  }
}

function writeFile(filePath, fileName, data) {
  try {
    return fs.writeFileSync(
      path.join(process.cwd(), filePath, fileName),
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    console.log(error);
    return { error: error.stack };
  }
}

module.exports = {
  readFile,
  writeFile
};
