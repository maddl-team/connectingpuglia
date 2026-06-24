import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  preview: {
    // Serve index.html for client-side routes on refresh (React Router)
    strictPort: true,
  },
})
