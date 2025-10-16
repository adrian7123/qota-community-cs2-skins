let dbInstance: any = null

/**
 * Obtém uma instância do banco de dados com reconexão automática
 */
export const getDatabaseConnection = () => {
  if (!dbInstance) {
    dbInstance = useDatabase()
  }
  return dbInstance
}

/**
 * Executa uma query SQL com retry automático em caso de conexão fechada
 */
export const executeQuery = async <T = any>(
  queryFn: (db: any) => Promise<T>,
  maxRetries: number = 3
): Promise<T> => {
  let attempts = 0

  while (attempts < maxRetries) {
    try {
      const db = getDatabaseConnection()
      return await queryFn(db)
    } catch (error: any) {
      attempts++

      // Verifica se é erro de conexão fechada
      const isConnectionError =
        error?.message?.includes("connection is in closed state") ||
        error?.message?.includes("Connection lost") ||
        error?.message?.includes("PROTOCOL_CONNECTION_LOST") ||
        error?.code === "PROTOCOL_CONNECTION_LOST"

      if (isConnectionError && attempts < maxRetries) {
        console.warn(`Tentativa ${attempts}/${maxRetries}: Reconectando ao banco de dados...`)

        // Reseta a instância para forçar nova conexão
        dbInstance = null

        // Aguarda um pouco antes de tentar novamente
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempts))

        continue
      }

      // Se não é erro de conexão ou esgotou as tentativas, relança o erro
      throw error
    }
  }

  throw new Error(`Falha ao executar query após ${maxRetries} tentativas`)
}

/**
 * Wrapper para consultas SQL simples
 */
export const sqlQuery = async (query: string, params: any[] = []) => {
  return executeQuery(async (db) => {
    const result = await db.sql.raw(query, params)
    return result
  })
}

/**
 * Wrapper para consultas SQL usando template literals
 */
export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  return executeQuery(async (db) => {
    // Reconstrói a query template
    let query = strings[0]
    for (let i = 0; i < values.length; i++) {
      query += "?" + strings[i + 1]
    }

    const result = await db.sql.raw(query, values)
    return result
  })
}
