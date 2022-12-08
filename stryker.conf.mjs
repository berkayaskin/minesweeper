// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  testRunner: 'jest',
  reporters: ['progress', 'clear-text', 'html', 'dashboard'],
  coverageAnalysis: 'perTest',
  thresholds: {
    high: 90,
    low: 88,
    break: 85,
  },
  jest: {
    projectType: 'create-react-app',
  },
  dashboard: {
    project: 'stryker-dashboard',
    version: '1.0.0',
    module: 'stryker-dashboard',
    baseUrl: 'https://dashboard.stryker-mutator.io/api/reports',
    reportType: 'full',
  },
  mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|stories|styled).ts?(x)'],
}
export default config
