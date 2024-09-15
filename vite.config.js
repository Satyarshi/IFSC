import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://nemesis.pythonanywhere.com', // Use environment variable for your custom API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/ifsccode': {
        target: 'https://ifsc.razorpay.com', // Direct proxy to Razorpay IFSC API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ifsccode/, ''),
      },
    },
  },
});
