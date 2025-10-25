import tailwindcss from "@tailwindcss/vite"
import type { ConnectionOptions } from "mysql2"

const databaseConnectionOptions: ConnectionOptions = {
  uri: import.meta.env.DATABASE_URL,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  connectionLimit: 10,
  maxIdle: 2,
  idleTimeout: 60000,
  supportBigNumbers: true,
  bigNumberStrings: true,
  charset: "utf8mb4"
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: import.meta.env.PORT ?? 3004
  },
  app: {
    head: {
      title: "Qota Community Skins",
      htmlAttrs: {
        lang: "pt-br"
      }
    }
  },
  ssr: false,
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
        options: databaseConnectionOptions
      }
    }
  }
})
