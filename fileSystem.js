import fs from  'fs'
import path from 'path'

export function readFileName(filePath, fileName) {
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

export function writeFileName(filePath, fileName, data) {
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

// module.exports = {
  // readFileName,
  // writeFileName
// };
