import { join } from 'path';
import { readdirSync, statSync } from 'fs';
import { getOptions } from './options-loader';

interface Path {
  includePath: string;
  originPath: string;
  currentPath: string;
}

function _traverseFilesInDirectory(
  path: Path,
  result: string[],
): void {
  const { currentPath, originPath, includePath } = path;
  const readContent = readdirSync(currentPath);

  readContent.forEach((content) => {
    const path = join(currentPath, content);
    const isDir = statSync(path).isDirectory();
    if (isDir) {
      _traverseFilesInDirectory(
        {
          originPath,
          includePath,
          currentPath: path,
        },
        result,
      );
    } else {
      result.push(
        join(
          includePath,
          path.replace(originPath, ''),
        )
      );
    }
  });
}

export function getMatchedPaths(): string[] {
  const result: string[] = [];
  const { include } = getOptions();
  const paths: Path[] = include.map(path => {
    const joinedPath = join(
      process.cwd(),
      path,
    );

    return {
      includePath: path,
      originPath: joinedPath,
      currentPath: joinedPath,
    };
  });

  paths.forEach(path => {
    _traverseFilesInDirectory(path, result);
  });

  return result;
}

export function getMatchedFiles(): string[] {
  const paths = getMatchedPaths();
  const { matchPattern } = getOptions();
  const patternReg = matchPattern.map(pattern => (
    new RegExp((pattern))
  ));

  return paths.filter(path => (
    patternReg.some(reg => reg.test(path))
  ));
}
