import react from '@vitejs/plugin-react';
import path from 'path';
import magicalSvg from 'vite-plugin-magical-svg';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), magicalSvg({ target: 'react' })],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
    exclude: ['**/*.spec.ts', 'node_modules/**/*'],
    setupFiles: ['__mocks__/index.ts'],
    coverage: {
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: [
        'src/**/*.stories.{js,ts,jsx,tsx}',
        'src/interfaces/**/*.ts',
        'src/types/**/*.ts',
        'src/services/i18n.ts',
        'src/assets/*'
      ]
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
