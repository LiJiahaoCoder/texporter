import { getOptions } from '../../src/utils/options-loader';

describe('Options loader tests', () => {
  test(
    'Should get correct options When call getOptions Given format is pdf and testMatch',
    () => {
      const result = getOptions();
      expect(result).toEqual({
        format: 'pdf',
        testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
        include: ['/mocks'],
      });
    },
  );

  test(
    'Should get default options When call getOptions Given texporter.json is undefined',
    () => {
      jest.mock('texporter.json', () => undefined);

      const result = getOptions();
      expect(result)
      .toEqual({
        format: 'html',
        testMatch: [
          '**/__tests__/**/*.[jt]s?(x)',
          '**/?(*.)+(spec|test).[tj]s?(x)',
        ],
        include: ['/src'],
      });

      jest.clearAllMocks();
    },
  );
});
