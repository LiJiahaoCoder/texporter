import { generateTestsContent } from '../../src/utils/reader';

const SUM_TEST_CONTENT = `import { sum } from '../../src/math/sum';

describe('mocks/math/sum tests', () => {
  test('Should get 4 When call sum Given a is 1, b is 3', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });
});
`;

describe('Reader tests', () => {
  test(
    'Should get sum.test.ts file content When call generateTestsContent Given path is [/mocks/__tests__/math/sum.test.ts]',
    () => {
      const result = generateTestsContent(['/mocks/__tests__/math/sum.test.ts']);
      expect(result).toEqual([
        { filepath: '/mocks/__tests__/math/sum.test.ts', content: SUM_TEST_CONTENT }
      ]);
    },
  );
});
