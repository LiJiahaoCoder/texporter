import { TexporterOptions } from '../types/options';

const DEFAULT_OPTIONS: TexporterOptions = {
  format: 'html',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};

export function getOptions(): TexporterOptions {
  const root = process.cwd();
  let options: TexporterOptions = {};

  try {
    options = require(`${root}/texporter.json`);
  } catch {}

  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
}
