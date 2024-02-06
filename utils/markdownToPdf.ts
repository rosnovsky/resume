import mdToPdf from 'md-to-pdf';

export const markdownToPdf = async (inputFilePath: string) => {
  try {
    const pdf = await mdToPdf({ path: inputFilePath });
    return pdf;
  } catch (error: any) {
      console.error(`Error occurred: ${error.message}`);
      throw new Error(error);
  }
}
