import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    base: '/',
    build: {
      sourcemap: isProduction ? 'hidden' : true,
      minify: isProduction ? 'terser' : false,
      terserOptions: isProduction 
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          } 
        : undefined,
    }
  }
})