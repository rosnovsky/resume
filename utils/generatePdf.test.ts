import assert from 'node:assert';
import { after, afterEach, describe, test } from 'node:test';
import { generatePdf } from "./generatePdf";
import fs from 'node:fs';

const mockMarkdownFilePathDoesntExist = `${process.cwd()}/resume_not_found.md`;
const mockMarkdownFilePathExists = `${process.cwd()}/resume.md`;
const outputFilePath = `${process.cwd()}/outputings/some_random_file.pdf`;

// set current working directory to the root of the project


describe('generatePdf', () => {  
  test('should throw an error when markdown file not found', async () => {
    assert.rejects(generatePdf(mockMarkdownFilePathDoesntExist, outputFilePath), {
      name: 'Error',
      message: `File ${mockMarkdownFilePathDoesntExist} does not exist. How am I supposed to build you a resume, mate?`
    });
  })

  test('should create an output folder if it doesn\'t exist', async () => {
    const folder = outputFilePath.split('/').slice(0, -1).join('/');
    await generatePdf(mockMarkdownFilePathExists, outputFilePath)
    assert.strictEqual(fs.existsSync(folder), true);

    after(() => {
      fs.rmSync(folder, { recursive: true, force: true });
    });
  })

  test('should generate a pdf from markdown', async () => {
    const folder = outputFilePath.split('/').slice(0, -1).join('/');

    await generatePdf(mockMarkdownFilePathExists, outputFilePath);

    assert.strictEqual(fs.existsSync(outputFilePath), true);

    after(() => {
      fs.rmSync(folder, { recursive: true, force: true });
    });
  })
})
