import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "serve-generated-seo-pages",
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          const pathname = new URL(request.url || "/", "http://localhost").pathname;
          if (/^\/guias(?:\/[a-z0-9-]+)?\/$/.test(pathname)) {
            request.url = `${pathname}index.html`;
          }
          next();
        });
      }
    }
  ]
});
