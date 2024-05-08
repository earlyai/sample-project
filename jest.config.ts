import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "node",
  rootDir: ".",
  roots: [
    "<rootDir>/apps/",
    "<rootDir>/libs/"
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
  collectCoverage: true,
  collectCoverageFrom: [
    "apps/**/*.(t|j)s",
    "libs/**/*.(t|j)s",
    "!**/*/*.e2e-spec.ts",
    "!**/*/main.ts",
    "!**/*/index.ts",
    "!**/*/*.module.ts"

  ],
  coverageDirectory: "<rootDir>/coverage",
  watchPathIgnorePatterns: [
    "<rootDir>/coverage/",
    "<rootDir>/\\.early.coverage/"
  ]
};

export default config;
