const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    configure: {
      // Automatically clear mock calls and instances between every test
      clearMocks: true,

      // Indicates whether the coverage information should be collected while executing the test
      collectCoverage: true,

      // The directory where Jest should output its coverage files
      coverageDirectory: 'coverage',

      coverageThreshold: {
        global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
        },
      },
      // An array of glob patterns indicating a set of files for which coverage information should be collected
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

      modulePaths: [compilerOptions.baseUrl],
      // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
      moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths),
      },
      /*moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>',
      }), */

      preset: 'ts-jest',

      // A list of paths to modules that run some code to configure or set up the testing framework before each test
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

      // The test environment that will be used for testing
      testEnvironment: 'jsdom',
      /* transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
      }, */
      testMatch: ['<rootDir>/src/**/*?(*.)+(spec|test).+(ts|tsx|js)'],
    },
  },
}
