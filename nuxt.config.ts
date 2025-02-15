import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: import.meta.env.PORT
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
  modules: ["@pinia/nuxt", "@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()]
  },
  nitro: {
    experimental: {
      database: true
    },
    database: {
      default: {
        connector: "mysql2",
        options: { uri: import.meta.env.DATABASE_URL }
      }
    }
  }
})