import { rootDir } from '../constants/root';
import { TexporterOptions } from '../types/options';

const DEFAULT_OPTIONS: TexporterOptions = {
  format: 'html',
  matchPattern: [
    '.*\/__tests__\/.*\\.[jt]sx?$',
    '.*(spec|test)\\.[jt]sx?$',
  ],
  include: ['/src'],
};

export function getOptions(): TexporterOptions {
  let options!: TexporterOptions;

  try {
    options = require(`${rootDir}/texporter.json`) ?? DEFAULT_OPTIONS;
  } catch {}

  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
}
