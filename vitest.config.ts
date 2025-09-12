/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './test-results/junit.xml'
    },
    // shard: process.env.VITEST_SHARD, // Format: `{index}/{total}` - Commented out due to TS error
    // maxThreads: 1, // Ensure consistent timing data - Commented out due to TS error
    // minThreads: 1 // Commented out due to TS error
  },
}) 