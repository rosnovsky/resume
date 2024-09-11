import mdToPdf from 'md-to-pdf';
import { getLogger } from './logger';

const logger = getLogger("markdownToPdf");

export const markdownToPdf = async (inputFilePath: string) => {
  try {
    logger.info("Converting Markdown to PDF...");
    const pdf = await mdToPdf({ path: inputFilePath });

    logger.info("PDF generated successfully!");
    return pdf;
  } catch (error: any) {
    logger.error(`Error occurred: ${error.message}`);
    throw error;
  }
}
