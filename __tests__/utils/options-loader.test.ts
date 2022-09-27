import { getOptions } from '../../src/utils/options-loader';

describe('Options loader tests', () => {
  test(
    'Should get correct options When call getOptions Given format is pdf and testMatch',
    () => {
      const result = getOptions();
      expect(result).toEqual({
        format: 'pdf',
        matchPattern: ['.*\/__tests__\/.*\\.[jt]sx?$'],
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
        matchPattern: [
          '.*\/__tests__\/.*\\.[jt]sx?$',
          '*.(spec|test)\\.[jt]sx?$',
        ],
        include: ['/src'],
      });

      jest.clearAllMocks();
    },
  );
});
