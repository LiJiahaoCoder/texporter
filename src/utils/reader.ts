import { join } from 'path';
import { readFileSync } from 'fs';
import { rootDir } from '../constants/root';
import { Content } from '../types/content';

function _readFileContent(path: string): string {
  const content = readFileSync(
    join(rootDir, path),
    'utf-8'
  );

  return content;
}

export function generateTestsContent(paths: string[]): Content[] {
  return paths.map(path => ({
    filepath: path,
    content: _readFileContent(path),
  }));
}
