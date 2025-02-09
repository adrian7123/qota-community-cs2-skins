import { Constants } from "../constants"

export class Cs2Helper {
  private weapons = Constants.cs2weapons

  pistols(team: string) {
    return this.weapons.filter(
      (weapon) => weapon.type === "pistol" && (weapon.team === team || weapon.team === "all")
    )
  }

  rifles(team: string) {
    return this.weapons.filter(
      (weapon) => weapon.type === "rifle" && (weapon.team === team || weapon.team === "all")
    )
  }

  mid(team: string) {
    return this.weapons.filter(
      (weapon) =>
        (weapon.type === "smg" || weapon.type === "shotgun" || weapon.type === "machinegun") &&
        (weapon.team === team || weapon.team === "all")
    )
  }

  knives() {
    return this.weapons.filter((weapon) => weapon.type === "knife")
  }

  gloves() {
    return this.weapons.filter((weapon) => weapon.type === "gloves")
  }

  agents(team: string) {
    return this.weapons.filter((weapon) => weapon.type === "agents" && weapon.team === team)
  }

  musics(team?: string) {
    return this.weapons.filter((weapon) => weapon.type === "musics")
  }
}
