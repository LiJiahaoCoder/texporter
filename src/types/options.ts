export type Format = 'html' | 'pdf';

export interface TexporterOptions {
  format: Format;
  matchPattern: string[];
  include: string[];
}
