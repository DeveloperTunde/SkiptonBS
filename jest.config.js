module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jest.setup.js",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|expo|@expo|@react-native|react-native-vector-icons|@tanstack|@testing-library)/)",
  ],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/types/**", "!src/**/*.d.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@screens/(.*)$": "<rootDir>/src/screens/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
  },
};
