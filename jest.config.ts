export default {
  roots: [
    '<rootDir>'
  ],
  clearMocks: true,
  testEnvironment: 'jest-environment-node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  // moduleNameMapper: {},
  // modulePathIgnorePatterns: [],
  // resolver: undefined,
  // setupFiles: [],
};
