import { TexporterOptions } from '../types/options';

const DEFAULT_OPTIONS: TexporterOptions = {
  format: 'html',
  matchPattern: [
    '.*\/__tests__\/.*\\.[jt]sx?$',
    '*.(spec|test)\\.[jt]sx?$',
  ],
  include: ['/src'],
};

export function getOptions(): TexporterOptions {
  const root = process.cwd();
  let options!: TexporterOptions;

  try {
    options = require(`${root}/texporter.json`) ?? DEFAULT_OPTIONS;
  } catch {}

  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
}
