import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import * as path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader({ defaultImport: 'url' }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  base: './',
  server: {
    port: 7001,
    open: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    target: 'es2015',
  },
})
