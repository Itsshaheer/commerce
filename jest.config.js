// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest', // Transpile .js/.jsx/.ts/.tsx using Babel
    },
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Mock styles
      '\\.svg$': '<rootDir>/__mocks__/svgMock.js', // Mock SVGs (optional)
    },
    transformIgnorePatterns: [
      '/node_modules/(?!YOUR_ESM_MODULE_HERE)', // Only needed if you know which package is failing
    ],
  }
  