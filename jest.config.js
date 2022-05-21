/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
 roots: [
     "./src"
   ],
 testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
     "**/?(*.)+(spec|test).[tj]s?(x)"
   ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\",
  ],
  collectCoverageFrom: [
    "!src/router.js",
    "!src/helpers/db/db.js",
    "!src/datasources/tmdb.js",
    "!**/node_modules/**",
  ],
   watchman: true
};
