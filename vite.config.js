import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: {
          enabled: true
      },
      includeAssets: ['https://img2.imgtp.com/2024/03/12/Oe8LQPGi.png'],
      manifest: {
          name: 'GROMACS GUI',
          short_name: "GMX GUI",
          theme_color: "#F3F3F3",
          start_url: "./",
          display: "standalone",
          background_color: "#F3F3F3",
          icons: [
              {
                  src: "https://img2.imgtp.com/2024/03/12/Oe8LQPGi.png",
                  sizes: "1024x1024",
                  type: "image/png"
              }
          ],
      },
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

