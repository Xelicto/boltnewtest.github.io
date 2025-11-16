import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 💡 ADD THIS LINE 💡
  // This ensures that all asset paths (like your main.tsx script)
  // are generated relative to the root of the deployed domain.
  base: '/',
  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
