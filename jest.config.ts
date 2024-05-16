import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: "node",
  rootDir: ".",
  roots: [
    "<rootDir>/src/", 
    "<rootDir>/apps/",
    "<rootDir>/libs/",
  ],
  // Module Resolution
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  moduleNameMapper: {
    "^@app/common(|/.*)$": "<rootDir>/libs/common/src/$1"
  },
  // Testing Patterns and Coverage
  testRegex: ".*\\.(test)\\.ts$",
  collectCoverageFrom: [
    "!**/*/main.ts",
    "!**/*/index.ts",
    "!**/*/*module.ts"
  ]
};

export default config;

