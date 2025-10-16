/**
 * Script de teste para validar a conexão com o banco de dados
 * Executa várias queries para testar a estabilidade da conexão
 */

import { executeQuery } from "~/shared/utils/database"

export default defineEventHandler(async (event) => {
  if (event.method !== "GET") {
    return { status: 405, error: "Método não permitido" }
  }

  try {
    console.log("🔄 Iniciando testes de conexão com o banco...")

    // Teste 1: Conexão básica
    console.log("1️⃣ Testando conexão básica...")
    const testConnection = await executeQuery(async (db) => {
      const result = await db.sql`SELECT 1 as test`
      return result
    })
    console.log("✅ Conexão básica: OK")

    // Teste 2: Query com timeout simulado
    console.log("2️⃣ Testando query com delay...")
    const testDelay = await executeQuery(async (db) => {
      const result = await db.sql`SELECT SLEEP(2) as delay_test, NOW() as current_time`
      return result
    })
    console.log("✅ Query com delay: OK")

    // Teste 3: Múltiplas queries sequenciais
    console.log("3️⃣ Testando múltiplas queries...")
    const results = []
    for (let i = 0; i < 5; i++) {
      const result = await executeQuery(async (db) => {
        const data = await db.sql`SELECT ${i} as iteration, NOW() as timestamp`
        return data
      })
      results.push(result)
    }
    console.log("✅ Múltiplas queries: OK")

    // Teste 4: Verificar tabelas do sistema
    console.log("4️⃣ Verificando estrutura das tabelas...")
    const tables = await executeQuery(async (db) => {
      const result = await db.sql`
        SELECT TABLE_NAME
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_SCHEMA = DATABASE()
        AND TABLE_NAME LIKE 'wp_player_%'
        ORDER BY TABLE_NAME
      `
      return result
    })
    console.log("✅ Estrutura das tabelas: OK")

    // Teste 5: Status da conexão
    console.log("5️⃣ Verificando status da conexão...")
    const connectionStatus = await executeQuery(async (db) => {
      const result = await db.sql`
        SELECT
          @@version as mysql_version,
          @@wait_timeout as wait_timeout,
          @@interactive_timeout as interactive_timeout,
          CONNECTION_ID() as connection_id
      `
      return result
    })
    console.log("✅ Status da conexão: OK")

    console.log("🎉 Todos os testes de conexão passaram!")

    return {
      status: 200,
      message: "Todos os testes de conexão foram executados com sucesso",
      tests: {
        basicConnection: testConnection,
        delayTest: testDelay,
        multipleQueries: results.length,
        systemTables: tables.rows?.length || 0,
        connectionStatus: connectionStatus.rows?.[0] || {}
      },
      timestamp: new Date().toISOString()
    }
  } catch (error: any) {
    console.error("❌ Erro nos testes de conexão:", error)

    return {
      status: 500,
      error: "Erro ao executar testes de conexão",
      details: error.message,
      timestamp: new Date().toISOString()
    }
  }
})
