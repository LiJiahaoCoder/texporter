import sum from '../src';

describe('Index test cases', () => {
  test('Should get 3 When call sum method Given a is 1, b is 2', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
