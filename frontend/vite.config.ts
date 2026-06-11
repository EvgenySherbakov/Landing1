import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base подстраивается под GitHub Pages (project page /Landing1/) через env,
// локально и за Go-бэкендом используется корень "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
