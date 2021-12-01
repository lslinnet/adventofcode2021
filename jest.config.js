module.exports = {
roots: [
"<rootDir>/src",
"<rootDir>/tests"
],
testMatch: [
"**/__tests__/**/*.+(ts|tsx|js)",
"**/?(*.)+(spec|test).+(ts|tsx|js)"
],
transform: {
"^.+\\.(ts|tsx)$": "ts-jest",
},
testPathIgnorePatterns: [

],
collectCoverageFrom: [
"**/*.{js,jsx,ts,tsx}",
"!**/*.d.ts",
"!**/node_modules/**"
],
globals: {
"ts-jest": {
  tsconfig: "tsconfig.json",
},
},
}
