import fs from 'node:fs';

export const checkFileExists = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} does not exist.`);
    return false;
  }
  return true;
}

export const checkFolderExists = (folderPath: string) => {
  const folder = folderPath.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(folder)) {
    console.error(`Folder ${folder} does not exist.`);
    return false;
  }
  return true;
}
