import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
  
  
export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    base: process.env.NODE_ENV === 'production' ? '/tobi-dev/' : '/',
    build: {
      sourcemap: 'hidden',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }
    }
})