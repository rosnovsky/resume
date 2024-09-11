import fs from 'node:fs';
import path from 'node:path';
import { checkFileExists, checkFolderExists } from './fsChecks';
import { getLogger } from './logger';
import { markdownToPdf } from './markdownToPdf';

const logger = getLogger("generatePdf");

export async function generatePdf(inputFilePath: string, outputFilePath: string) {
  logger.info("Checking if input file exists...");
  if (!checkFileExists(inputFilePath)) {
    throw new Error(`File ${inputFilePath} does not exist. How am I supposed to build you a resume, mate?`);
  }

  logger.info("Checking if output folder exists...");
  if (!checkFolderExists(outputFilePath)) {
    fs.mkdirSync(outputFilePath.split('/').slice(0, -1).join("/"), { recursive: true });
  }

  try {
    logger.info("Trying to generate PDF...");
    const pdf = await markdownToPdf(inputFilePath);
    if (pdf) {
      logger.info("Writing PDF to file...");
      fs.writeFileSync(path.resolve(__dirname, outputFilePath), pdf.content);
      return;
    }
  } catch (error: any) {
    logger.error(`Error occurred: ${error.message}`);
    throw error;
  }
}
