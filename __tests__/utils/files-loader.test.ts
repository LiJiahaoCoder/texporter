import { getMatchedPaths, getMatchedFiles } from '../../src/utils/files-loader';

describe('Files loader tests', () => {
  test(
    'Should get correct paths list When call getMatchedPaths Given include is mocks directory',
    () => {
      const result = getMatchedPaths();
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

  test(
    'Should get correct files When call getMatchedFiles Given mocked directory',
    () => {
      const result = getMatchedFiles();
      expect(result).toEqual([
        '/mocks/__tests__/index.test.ts',
        '/mocks/__tests__/math/sum.test.ts',
      ]);
    },
  );
});
