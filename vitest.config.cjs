const { defineConfig } = require('vitest/config')

module.exports = defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './test-results/junit.xml'
    },
    shard: process.env.VITEST_SHARD, // Format: `{index}/{total}`
    maxThreads: 1, // Ensure consistent timing data
    minThreads: 1
  },
})
