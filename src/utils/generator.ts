import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import rimraf from 'rimraf';
import { Content } from '../types/content';
import { rootDir } from '../constants/root';
import { generateTestsContent } from './reader';
import { getMatchedFiles } from './files-loader';

export function generateHtmlContent(contents: Content[]) {
  const testCases = contents.map(({ filepath, content }) => (
    `<div>
<div>${filepath}</div>
<div>
${content}
</div>
</div>`
  )).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Test cases</title>
</head>
<body>
${testCases}
</body>
</html>`;
}

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
