module.exports = {
  projects: [
    {
      displayName: "unit-tests",
      testMatch: ["<rootDir>/src/__tests__/unit/**/*.test.[jt]s?(x)"],
      transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
      },
      testEnvironment: "jsdom", // Entorno para pruebas unitarias
      setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    },
    {
      displayName: "regression-tests",
      testMatch: ["<rootDir>/src/__tests__/regression/**/*.test.[jt]s?(x)"],
      transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
      },
      testEnvironment: "<rootDir>/visual-regression/puppeteer-environment.cjs", // Entorno para pruebas de regresión
      globalSetup: "<rootDir>/visual-regression/setup.cjs",
      globalTeardown: "<rootDir>/visual-regression/teardown.cjs",
    },
  ],
};