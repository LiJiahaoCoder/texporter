import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import rimraf from 'rimraf';
import { rootDir } from '../constants/root';
import { generateTestsContent } from './reader';
import { getMatchedFiles } from './files-loader';
import { generateHtmlContent } from './generator';

export function createHtmlFile(output = 'texport') {
  const outputPath = join(rootDir, output);

  if (existsSync(outputPath)) {
    rimraf.sync(outputPath);
  }

  mkdirSync(outputPath, { recursive: true });
  writeFileSync(
    join(outputPath, 'index.html'),
    generateHtmlContent(
      generateTestsContent(
        getMatchedFiles()
      )
    ),
  );
}
