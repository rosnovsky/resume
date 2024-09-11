import { generatePdf } from './utils/generatePdf';
import { getLogger } from './utils/logger';

const logger = getLogger("MAIN");

const INPUT_FILE_PATH = `${process.cwd()}/resume.md`;
const OUTPUT_FILE_PATH = `${process.cwd()}/output/art_rosnovsky_software_engineer.pdf`;

(async () => {
  logger.info(`INPUT_FILE_PATH: ${INPUT_FILE_PATH}`);
  logger.info(`OUTPUT_FILE_PATH: ${OUTPUT_FILE_PATH}`);
  try {
    logger.info("Generating PDF...");
    await generatePdf(INPUT_FILE_PATH, OUTPUT_FILE_PATH);
  } catch (error: any) {
    logger.error(`Error occurred: ${error.message}`);
    process.exit(1);
  }
})()
