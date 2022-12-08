module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'src/index.tsx',
    'src/App',
    'src/config',
    'src/reportWebVitals.ts',
  ],
  moduleNameWrapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*?(*.)+(spec|test).+(ts|tsx|js)'],
}
