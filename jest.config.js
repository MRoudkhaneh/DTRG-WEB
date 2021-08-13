module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  resetMocks: false,
}
