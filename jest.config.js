module.exports = {
  preset: 'react-native',
  watch: true,
  setupFiles: ['./jest.setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.**'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
};
