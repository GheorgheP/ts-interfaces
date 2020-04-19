module.exports = {
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "\\.test\\.ts$",
  testPathIgnorePatterns: ["<rootDir>(?!/(src|examples)/).+"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
};
