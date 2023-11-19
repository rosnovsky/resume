import fs from "node:fs";
import { mdToPdf } from "md-to-pdf";

(async () => {
  const pdf = await mdToPdf({ path: "./resume.md" }).catch(console.error);

  if (pdf) {
    fs.writeFileSync("output/art_rosnovsky_software_engineer.pdf", pdf.content);
  }
})();
