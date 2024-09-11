import fs from 'node:fs';
import { getLogger } from './logger';

const logger = getLogger("fsChecks");

export const checkFileExists = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    logger.error(`File ${filePath} does not exist.`);
    return false;
  }
  return true;
}

export const checkFolderExists = (folderPath: string) => {
  const folder = folderPath.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(folder)) {
    logger.error(`Folder ${folder} does not exist.`);
    return false;
  }
  return true;
}
