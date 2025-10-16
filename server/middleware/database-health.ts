/**
 * Middleware para monitorar a saúde da conexão com banco de dados
 * Executa verificações periódicas para manter a conexão ativa
 */

import { executeQuery } from "~/shared/utils/database"

let lastHealthCheck = 0
const HEALTH_CHECK_INTERVAL = 5 * 60 * 1000 // 5 minutos

/**
 * Executa um health check da conexão com o banco
 */
const performHealthCheck = async (): Promise<void> => {
  try {
    await executeQuery(async (db) => {
      // Query simples para manter a conexão ativa
      await db.sql`SELECT 1 as health_check`
      return true
    })

    console.log("✅ Health check da conexão MySQL: OK", new Date().toISOString())
  } catch (error: any) {
    console.error("❌ Health check da conexão MySQL: FALHOU", {
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
}

export default defineEventHandler(async () => {
  // Só executa health check se passou o intervalo definido
  const now = Date.now()

  if (now - lastHealthCheck > HEALTH_CHECK_INTERVAL) {
    lastHealthCheck = now

    // Executa health check de forma assíncrona para não bloquear a request
    performHealthCheck().catch((error) => {
      console.error("Erro no health check assíncrono:", error)
    })
  }

  // Continua com o processamento normal da request
  // Este middleware é transparente e não interfere no fluxo normal
})
