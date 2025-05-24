import type { DBAgent, DBGlove, DBKnife, DBMusic, DBSkin } from "~/models/db.model"
import type { Skin } from "~/models/skin.model"
import { Constants } from "../constants"

export class Cs2Helper {
  private readonly weapons = Constants.cs2weapons

  getAgent(weapon?: Skin, dbAgents?: DBAgent[], skins?: Skin[], team?: number): Skin | undefined {
    if (!weapon || !dbAgents || !skins || !team) return

    let skin: Skin | undefined

    dbAgents.forEach((dbAgent) => {
      if (team === 3) {
        skin = skins.find((skin) => skin.model_player?.includes(dbAgent.agent_ct))
      } else {
        skin = skins.find((skin) => skin.model_player?.includes(dbAgent.agent_t))
      }
    })

    return skin ?? weapon
  }

  getGlove(
    weapon?: Skin,
    dbGloves?: DBGlove[],
    dbSkins?: DBSkin[],
    skins?: Skin[],
    team?: number
  ): Skin | undefined {
    if (!weapon || !dbGloves || !dbSkins || !skins || !team) return

    let skin: Skin | undefined

    dbGloves.forEach((dbGlove) => {
      if (team !== dbGlove.weapon_team) return

      const dbSkin = dbSkins.find((skin) => skin.weapon_defindex === dbGlove.weapon_defindex)

      console.log(dbSkin)

      skin = skins.find(
        (skin) =>
          Number.parseInt(skin.paint_index ?? "0") === dbSkin?.weapon_paint_id &&
          skin.weapon?.weapon_id === dbGlove.weapon_defindex
      )
    })

    return skin ?? weapon
  }

  getMusic(weapon?: Skin, dbMusics?: DBMusic[], musics?: Skin[], team?: number): Skin | undefined {
    if (!weapon || !dbMusics || !musics || !team) return

    let skin: Skin | undefined

    dbMusics.forEach((dbMusic) => {
      if (team !== dbMusic.weapon_team) return

      skin = musics.find(
        (music) => Number.parseInt(music.id.replace("music_kit-", "")) === dbMusic.music_id
      )
    })

    return skin ?? weapon
  }

  getSkin(weapon?: Skin, dbSkins?: DBSkin[], skins?: Skin[], team?: number): Skin | undefined {
    if (!weapon || !dbSkins || !skins || !team) return

    const dbSkin = dbSkins.find((skin) => {
      const found = skin.weapon_defindex === weapon.weapon?.weapon_id

      const hasTeam = skin.weapon_team == team

      return found && hasTeam
    })

    if (dbSkin) {
      return (
        skins?.find((k) => Number.parseInt(k.paint_index ?? "0") === dbSkin.weapon_paint_id) ??
        weapon
      )
    }

    return weapon
  }

  getKnife(
    weapon?: Skin,
    dbKnives?: DBKnife[],
    dbSkins?: DBSkin[],
    skins?: Skin[],
    team?: number
  ): Skin | undefined {
    if (!weapon || !dbKnives?.length || !skins || !team) return weapon

    let skin: Skin | undefined

    dbKnives?.forEach((knife) => {
      const hasTeam = knife?.weapon_team == team

      const knifeSkinID = skins.find((skin) => skin.weapon?.id === knife.knife)?.weapon?.weapon_id

      const dbSkin = dbSkins?.find((k) => knifeSkinID === k.weapon_defindex)

      const knifeSkin = skins.find(
        (skin) =>
          Number.parseInt(skin.paint_index ?? "0") === dbSkin?.weapon_paint_id &&
          skin.weapon?.id === knife.knife
      )

      if (dbSkin && hasTeam) {
        skin = knifeSkin
      }
    })

    return skin ?? weapon
  }

  pistols(team: string) {
    return this.weapons.filter(
      (weapon) => weapon.type === "pistol" && (weapon.team.id === team || weapon.team.id === "both")
    )
  }

  rifles(team: string) {
    return this.weapons.filter(
      (weapon) => weapon.type === "rifle" && (weapon.team.id === team || weapon.team.id === "both")
    )
  }

  mid(team: string) {
    return this.weapons.filter(
      (weapon) =>
        (weapon.type === "smg" || weapon.type === "shotgun" || weapon.type === "machinegun") &&
        (weapon.team.id === team || weapon.team.id === "both")
    )
  }

  knives() {
    return this.weapons.filter((weapon) => weapon.type === "knife")
  }

  gloves() {
    return this.weapons.filter((weapon) => weapon.type === "gloves")
  }

  agents(team: string) {
    return this.weapons.filter((weapon) => weapon.type === "agents" && weapon.team.id === team)
  }

  musics() {
    return this.weapons.filter((weapon) => weapon.type === "musics")
  }
}
