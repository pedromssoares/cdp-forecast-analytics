/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
  },
  // Permite que Jest transforme módulos ESM como o lucide-react
  transformIgnorePatterns: [
    "node_modules/(?!(lucide-react)/)"
  ],
  // Trata arquivos .ts e .tsx como módulos ESM
  extensionsToTreatAsEsm: [".ts", ".tsx"]
};

module.exports = createJestConfig(customJestConfig);