import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

/*
// Original Configuration

export default defineConfig({
  plugins: [react()],
})
*/

/*
export default defineConfig({
  plugins: [react()],
  server:{
  port:3000
  }
})
*/

// For Git hub
export default defineConfig({
  plugins: [react()],
  base: "./my-app/",
  server:{
  port:3000
  }
})