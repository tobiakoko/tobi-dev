import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
  
export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    base: process.env.NODE_ENV === 'production' ? '/tobi-dev/' : '/',
    publicDir: 'public',
    resolve: {
      alias: {
        '~/*': resolve(__dirname, './app'),
        '~/assets': resolve(__dirname, './app/assets'),
        '~/public': resolve(__dirname, './public'),
      }
    },
    build: {
      assetsDir: 'assets',
      sourcemap: 'hidden',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'app/root.tsx')
        }, 
        output: {
          manualChunks: undefined,
        }
      },
    }
})