export type Format = 'html' | 'pdf';

export interface TexporterOptions {
  format?: Format;
  testMatch?: string[];
}
