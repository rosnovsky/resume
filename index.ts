import { generatePdf } from './utils/generatePdf';

const INPUT_FILE_PATH = `${process.cwd()}/resume.md`;
const OUTPUT_FILE_PATH = `${process.cwd()}/output/art_rosnovsky_software_engineer.pdf`;

(async () => {
  try {
    await generatePdf(INPUT_FILE_PATH, OUTPUT_FILE_PATH);
  } catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
    process.exit(1);
  }
})
