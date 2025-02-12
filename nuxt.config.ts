import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3004
  },

  app: {
    head: {
      title: "Qota Community Skins",
      htmlAttrs: {
        lang: "pt-br"
      }
    }
  },
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      port: 3004
    }
  },
  nitro: {
    experimental: {
      database: true
    },
    database: {
      default: {
        connector: "mysql2",
        options: { uri: import.meta.env.NUXT_APP_DATABASE_URL }
      }
    }
  }
})
