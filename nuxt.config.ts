import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Qota Community Skins"
    }
  },
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
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
        options: { uri: import.meta.env.NUXT_APP_DATABASE_URL }
      }
    }
  }
})
