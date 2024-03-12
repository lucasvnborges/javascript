const commonConfig = require('./jest.config');

module.exports = {
  ...commonConfig,
  testMatch: ['**/*.integration.test.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage/integration'
};
