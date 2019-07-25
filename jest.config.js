module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
}
