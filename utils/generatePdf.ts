import path from 'node:path';
import fs from 'node:fs';
import { checkFileExists, checkFolderExists } from './fsChecks';
import { markdownToPdf } from './markdownToPdf';

export async function generatePdf(inputFilePath: string, outputFilePath: string) {
  if (!checkFileExists(inputFilePath)) {
    throw new Error(`File ${inputFilePath} does not exist. How am I supposed to build you a resume, mate?`);
  }

  if (!checkFolderExists(outputFilePath)) {
    fs.mkdirSync(outputFilePath.split('/').slice(0, -1).join("/"), { recursive: true });
  }

  try {
    const pdf = await markdownToPdf(inputFilePath);
    if (pdf) {
      fs.writeFileSync(path.resolve(__dirname, outputFilePath), pdf.content);
      return;
    }
  } catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
    throw error;
  }
}
