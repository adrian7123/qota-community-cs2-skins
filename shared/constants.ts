import type { Cs2Weapon } from "~/models/skin.model"

export abstract class Constants {
  static get currentHost(): string | undefined {
    if (import.meta.client) {
      return `${window.location.protocol}//${window.location.host}/login`
    }
  }
  static readonly skinsUrl = "https://bymykel.github.io/CSGO-API/api/en/skins.json"

  static readonly cs2weapons: Cs2Weapon[] = [
    // Pistolas
    {
      id: "weapon_usp_silencer",
      name: "USP-S",
      image: "/weapon/weapon_usp_silencer.png",
      type: "pistol",
      team: "ct"
    },
    {
      id: "weapon_glock",
      name: "Glock-18",
      image: "/weapon/weapon_glock.png",
      type: "pistol",
      team: "t"
    },
    {
      id: "weapon_p250",
      name: "P250",
      image: "/weapon/weapon_p250.png",
      type: "pistol",
      team: "all"
    },
    {
      id: "weapon_elite",
      name: "Dual Berettas",
      image: "/weapon/weapon_elite.png",
      type: "pistol",
      team: "all"
    },
    {
      id: "weapon_revolver",
      name: "R8 Revolver",
      image: "/weapon/weapon_revolver.png",
      type: "pistol",
      team: "all"
    },
    {
      id: "weapon_deagle",
      name: "Desert Eagle",
      image: "/weapon/weapon_deagle.png",
      type: "pistol",
      team: "all"
    },
    {
      id: "weapon_tec9",
      name: "Tec-9",
      image: "/weapon/weapon_tec9.png",
      type: "pistol",
      team: "t"
    },
    {
      id: "weapon_cz75a",
      name: "CZ75-Auto",
      image: "/weapon/weapon_cz75a.png",
      type: "pistol",
      team: "all"
    },
    {
      id: "weapon_fiveseven",
      name: "Five-SeveN",
      image: "/weapon/weapon_fiveseven.png",
      type: "pistol",
      team: "ct"
    },
    {
      id: "weapon_hkp2000",
      name: "P2000",
      image: "/weapon/weapon_hkp2000.png",
      type: "pistol",
      team: "ct"
    },

    // Rifles
    {
      id: "weapon_ak47",
      name: "AK-47",
      image: "/weapon/weapon_ak47.png",
      type: "rifle",
      team: "t"
    },
    {
      id: "weapon_m4a1",
      name: "M4A4",
      image: "/weapon/weapon_m4a1.png",
      type: "rifle",
      team: "ct"
    },
    {
      id: "weapon_m4a1_silencer",
      name: "M4A1-S",
      image: "/weapon/weapon_m4a1_silencer.png",
      type: "rifle",
      team: "ct"
    },
    {
      id: "weapon_awp",
      name: "AWP",
      image: "/weapon/weapon_awp.png",
      type: "rifle",
      team: "all"
    },
    {
      id: "weapon_ssg08",
      name: "SSG 08",
      image: "/weapon/weapon_ssg08.png",
      type: "rifle",
      team: "all"
    },
    {
      id: "weapon_scar20",
      name: "SCAR-20",
      image: "/weapon/weapon_scar20.png",
      type: "rifle",
      team: "ct"
    },
    {
      id: "weapon_g3sg1",
      name: "G3SG1",
      image: "/weapon/weapon_g3sg1.png",
      type: "rifle",
      team: "t"
    },
    {
      id: "weapon_aug",
      name: "AUG",
      image: "/weapon/weapon_aug.png",
      type: "rifle",
      team: "ct"
    },
    {
      id: "weapon_sg556",
      name: "SG 553",
      image: "/weapon/weapon_sg556.png",
      type: "rifle",
      team: "t"
    },
    {
      id: "weapon_galilar",
      name: "Galil AR",
      image: "/weapon/weapon_galilar.png",
      type: "rifle",
      team: "t"
    },
    {
      id: "weapon_famas",
      name: "FAMAS",
      image: "/weapon/weapon_famas.png",
      type: "rifle",
      team: "ct"
    },

    // Submetralhadoras
    {
      id: "weapon_mac10",
      name: "MAC-10",
      image: "/weapon/weapon_mac10.png",
      type: "smg",
      team: "t"
    },
    {
      id: "weapon_mp9",
      name: "MP9",
      image: "/weapon/weapon_mp9.png",
      type: "smg",
      team: "ct"
    },
    {
      id: "weapon_mp7",
      name: "MP7",
      image: "/weapon/weapon_mp7.png",
      type: "smg",
      team: "all"
    },
    {
      id: "weapon_mp5sd",
      name: "MP5-SD",
      image: "/weapon/weapon_mp5sd.png",
      type: "smg",
      team: "all"
    },
    {
      id: "weapon_ump45",
      name: "UMP-45",
      image: "/weapon/weapon_ump45.png",
      type: "smg",
      team: "all"
    },
    {
      id: "weapon_p90",
      name: "P90",
      image: "/weapon/weapon_p90.png",
      type: "smg",
      team: "all"
    },
    {
      id: "weapon_bizon",
      name: "PP-Bizon",
      image: "/weapon/weapon_bizon.png",
      type: "smg",
      team: "all"
    },

    // Escopetas
    {
      id: "weapon_nova",
      name: "Nova",
      image: "/weapon/weapon_nova.png",
      type: "shotgun",
      team: "all"
    },
    {
      id: "weapon_xm1014",
      name: "XM1014",
      image: "/weapon/weapon_xm1014.png",
      type: "shotgun",
      team: "all"
    },
    {
      id: "weapon_sawedoff",
      name: "Sawed-Off",
      image: "/weapon/weapon_sawedoff.png",
      type: "shotgun",
      team: "t"
    },
    {
      id: "weapon_mag7",
      name: "MAG-7",
      image: "/weapon/weapon_mag7.png",
      type: "shotgun",
      team: "ct"
    },

    // Metralhadoras
    {
      id: "weapon_m249",
      name: "M249",
      image: "/weapon/weapon_m249.png",
      type: "machinegun",
      team: "all"
    },
    {
      id: "weapon_negev",
      name: "Negev",
      image: "/weapon/weapon_negev.png",
      type: "machinegun",
      team: "all"
    },

    // Facas
    {
      id: "weapon_knife",
      name: "Knife",
      image: "/skins/weapon_knife.png",
      type: "knife",
      team: "ct"
    },
    {
      id: "weapon_knife_kukri",
      name: "Kukri",
      image: "/skins/weapon_knife_kukri.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_bayonet",
      name: "Bayonet",
      image: "/weapon/weapon_bayonet.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_butterfly",
      name: "Butterfly Knife",
      image: "/weapon/weapon_knife_butterfly.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_karambit",
      name: "Karambit",
      image: "/weapon/weapon_knife_karambit.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_m9_bayonet",
      name: "M9 Bayonet",
      image: "/weapon/weapon_knife_m9_bayonet.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_tactical",
      name: "Huntsman Knife",
      image: "/weapon/weapon_knife_tactical.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_falchion",
      name: "Falchion Knife",
      image: "/weapon/weapon_knife_falchion.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_push",
      name: "Shadow Daggers",
      image: "/weapon/weapon_knife_push.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_survival_bowie",
      name: "Bowie Knife",
      image: "/weapon/weapon_knife_survival_bowie.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_ursus",
      name: "Ursus Knife",
      image: "/weapon/weapon_knife_ursus.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_gypsy_jackknife",
      name: "Navaja Knife",
      image: "/weapon/weapon_knife_gypsy_jackknife.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_stiletto",
      name: "Stiletto Knife",
      image: "/weapon/weapon_knife_stiletto.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_widowmaker",
      name: "Talon Knife",
      image: "/weapon/weapon_knife_widowmaker.png",
      type: "knife",
      team: "all"
    },
    {
      id: "weapon_knife_css",
      name: "Classic Knife",
      image: "/weapon/weapon_knife_css.png",
      type: "knife",
      team: "all"
    },
    {
      id: "default_gloves",
      name: "Gloves",
      image: "/skins/default_gloves.png",
      type: "gloves",
      team: "all"
    },

    // agents
    {
      id: "default_agent_tr",
      name: "Default TR",
      image: "/defaults/agent-tr.png",
      type: "agents",
      team: "t"
    },
    {
      id: "default_agent_ct",
      name: "Default CT",
      image: "/defaults/agent-ct.png",
      type: "agents",
      team: "ct"
    },

    // music
    {
      id: "default_music",
      name: "Music Default",
      image: "/defaults/music.png",
      type: "musics",
      team: "all"
    }
  ]
}
