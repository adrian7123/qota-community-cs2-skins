import type { DBSkin } from "~/models/db.model"
import type { Skin } from "~/models/skin.model"
import { Constants } from "../constants"

export class Cs2Helper {
  private readonly weapons = Constants.cs2weapons

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

  musics(team?: string) {
    return this.weapons.filter((weapon) => weapon.type === "musics")
  }
}
