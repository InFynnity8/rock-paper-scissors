import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';

const config: Config = {
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};

export default config;
