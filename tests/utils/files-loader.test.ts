import { getFilesMatchedIncludePattern } from '../../src/utils/files-loader';

describe('Files loader tests', () => {
  test(
    'Should get correct files list When call getFilesMatchedIncludePattern Given include is mocks directory',
    () => {
      const result = getFilesMatchedIncludePattern();
      expect(result).toEqual([
        '/mocks/README.md',
        '/mocks/__tests__/index.test.ts',
        '/mocks/__tests__/math/sum.test.ts',
        '/mocks/src/index.ts',
        '/mocks/src/math/sum.ts',
        '/mocks/texporter.json',
      ]);
    },
  );
});
