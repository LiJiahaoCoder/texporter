export default {
  roots: [
    '<rootDir>'
  ],
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
  moduleNameMapper: {
    'texporter.json': '<rootDir>/mocks/texporter.json',
  },
  // modulePathIgnorePatterns: [],
  // resolver: undefined,
  // setupFiles: [],
};
