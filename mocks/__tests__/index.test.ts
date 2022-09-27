import main from '../src';

describe('mocks/index.ts tests', () => {
  test('Should get logger When call main Given logger in return value', () => {
    const result = main();
    expect(result).toEqual({ logger: 'This is main.ts in mocks/' });
  });
});
