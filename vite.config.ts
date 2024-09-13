import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      // styles: `${path.resolve(__dirname, "./src/styles/")}`,
      // pages: path.resolve(__dirname, "./src/pages"),
      // types: `${path.resolve(__dirname, "./src/@types")}`,
    },
  },
});
