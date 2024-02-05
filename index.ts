import fs from "node:fs";
import path from "node:path";
import { mdToPdf } from "md-to-pdf";

export const markdownFilePath = "./resume.md";
export const outputFilePath = "output/art_rosnovsky_software_engineer.pdf";

export async function generatePdf() {
  if (!fs.existsSync(markdownFilePath)) {
    console.error(`File ${markdownFilePath} does not exist.`);
    throw new Error(`File ${markdownFilePath} does not exist.`);
  }

  try {
    const pdf = await mdToPdf({ path: markdownFilePath });

    if (pdf) {
      fs.writeFileSync(path.resolve(__dirname, outputFilePath), pdf.content);
      console.log(`PDF has been written to ${outputFilePath}`);
    }
  } catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
    throw new Error(error.message);
  }
}

generatePdf();
