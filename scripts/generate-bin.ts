import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import rimraf from 'rimraf';

const OUTPUT_PATH = resolve(__dirname, '../build/bin');
const COMMAND = 'tex';
const FILE_NAME = resolve(__dirname, OUTPUT_PATH, COMMAND);
const FILE_CONTENT = `#!/usr/bin/env node
require('../index.js');
`;

function main() {
  if (existsSync(OUTPUT_PATH)) {
    deleteCachedDir();
  }

  createBinDir();
  createBinFile();
}

function deleteCachedDir() {
  rimraf.sync(OUTPUT_PATH);
}

function createBinDir() {
  mkdirSync(OUTPUT_PATH, { recursive: true });
}

function createBinFile() {
  writeFileSync(FILE_NAME, FILE_CONTENT);
}

main();

