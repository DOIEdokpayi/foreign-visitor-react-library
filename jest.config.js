module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$.*(?<!\.d\.ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  preset: 'ts-jest',
  setupFiles: ["<rootDir>/src/setuptest.js"]
};
