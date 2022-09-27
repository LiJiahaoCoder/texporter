import { getOptions } from '../../src/utils/options-loader';

describe('Options loader tests', () => {
  test(
    'Should get correct options When call getOptions Given format is pdf and testMatch',
    () => {
      const result = getOptions();
      expect(result).toEqual({
        format: 'pdf',
        testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
        include: ['src/**/*'],
      });
    },
  );
});
