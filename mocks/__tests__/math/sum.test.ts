import { sum } from '../../src/math/sum';

describe('mocks/math/sum tests', () => {
  test('Should get 4 When call sum Given a is 1, b is 3', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });
});
