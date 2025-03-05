import tailwindcss from "@tailwindcss/vite"
import type { ConnectionOptions } from "mysql2"

const databaseConnectionOptions: ConnectionOptions = {
  uri: import.meta.env.DATABASE_URL,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
  waitForConnections: true,
  connectionLimit: 5, // Pool com até 5 conexões
  queueLimit: 0, // Sem limite de fila
  connectTimeout: 30000, // 30 segundos para conectar
  idleTimeout: 14400000 // 1 minuto de inatividade
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
        options: databaseConnectionOptions
      }
    }
  }
})
