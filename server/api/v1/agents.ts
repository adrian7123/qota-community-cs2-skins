import { executeQuery } from "~/shared/utils/database"

export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)

  if (!steamId) {
    return {
      status: 400,
      error: "steamId is required"
    }
  }

  try {
    if (event.method === "GET") {
      const agents = await getAgents(steamId as string)
      return {
        status: 200,
        agents
      }
    }

    if (event.method === "POST") {
      const skin = await readBody(event)
      const agents = await postAgent(steamId as string, skin)

      return {
        status: 200,
        agents
      }
    }
  } catch (error: any) {
    console.error("Erro na API agents:", error)
    throw createError({
      statusCode: 500,
      statusMessage: "Erro interno do servidor",
      data: error.message
    })
  }
})

const getAgents = async (steamId: string) => {
  return executeQuery(async (db) => {
    const { rows } = await db.sql`SELECT * FROM wp_player_agents WHERE steamId = ${steamId}`
    return rows
  })
}

const postAgent = async (steamId: string, agent: Record<string, any>) => {
  return executeQuery(async (db) => {
    const { rows } = await db.sql`SELECT * FROM wp_player_agents WHERE steamid = ${steamId}`

    if (rows?.length === 0) {
      await db.sql`INSERT INTO wp_player_agents (steamid) VALUES (${steamId})`
    }

    let res: any

    if (agent.agent_ct) {
      res = await db.sql`
        UPDATE wp_player_agents
        SET agent_ct = ${agent.agent_ct}
        WHERE steamid = ${steamId}`
    } else {
      res = await db.sql`
        UPDATE wp_player_agents
        SET agent_t = ${agent.agent_t}
        WHERE steamid = ${steamId}`
    }

    return res
  })
}
