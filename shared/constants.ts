import { WeaponType, type Skin } from "~/models/skin.model"

export abstract class Constants {
  static get currentHost(): string | undefined {
    if (import.meta.client) {
      return `${window.location.protocol}//${window.location.host}/login`
    }
  }

  static readonly cs2weapons: Skin[] = [
    // Pistolas
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_usp_silencer",
      name: "USP-S | Default",
      weapon: { id: "", weapon_id: 61, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_usp_silencer.png",
      type: "pistol",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_glock",
      name: "Glock-18 | Default",
      weapon: { id: "", weapon_id: 4, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_glock.png",
      type: "pistol",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_p250",
      name: "P250 | Default",
      weapon: { id: "", weapon_id: 36, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_p250.png",
      type: "pistol",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_elite",
      name: "Dual Berettas | Default",
      weapon: { id: "", weapon_id: 2, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_elite.png",
      type: "pistol",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_revolver",
      name: "R8 Revolver | Default",
      weapon: { id: "", weapon_id: 64, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_revolver.png",
      type: "pistol",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_deagle",
      name: "Desert Eagle | Default",
      weapon: { id: "", weapon_id: 1, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_deagle.png",
      type: "pistol",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_tec9",
      name: "Tec-9 | Default",
      weapon: { id: "", weapon_id: 30, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_tec9.png",
      type: "pistol",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_cz75a",
      name: "CZ75-Auto | Default",
      weapon: { id: "", weapon_id: 63, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_cz75a.png",
      type: "pistol",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_fiveseven",
      name: "Five-SeveN | Default",
      weapon: { id: "", weapon_id: 3, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_fiveseven.png",
      type: "pistol",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_hkp2000",
      name: "P2000 | Default",
      weapon: { id: "", weapon_id: 32, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_hkp2000.png",
      type: "pistol",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },

    // Rifles
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_ak47",
      name: "AK-47 | Default",
      weapon: { id: "", weapon_id: 7, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_ak47.png",
      type: "rifle",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_m4a1",
      name: "M4A4 | Default",
      weapon: { id: "", weapon_id: 16, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_m4a1.png",
      type: "rifle",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_m4a1_silencer",
      name: "M4A1-S | Default",
      weapon: { id: "", weapon_id: 60, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_m4a1_silencer.png",
      type: "rifle",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_awp",
      name: "AWP | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_awp.png",
      type: "rifle",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_ssg08",
      name: "SSG 08 | Default",
      weapon: { id: "", weapon_id: 40, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_ssg08.png",
      type: "rifle",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_scar20",
      name: "SCAR-20 | Default",
      weapon: { id: "", weapon_id: 38, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_scar20.png",
      type: "rifle",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_g3sg1",
      name: "G3SG1 | Default",
      weapon: { id: "", weapon_id: 11, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_g3sg1.png",
      type: "rifle",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_aug",
      name: "AUG | Default",
      weapon: { id: "", weapon_id: 8, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_aug.png",
      type: "rifle",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_sg556",
      name: "SG 553 | Default",
      weapon: { id: "", weapon_id: 39, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_sg556.png",
      type: "rifle",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_galilar",
      name: "Galil AR | Default",
      weapon: { id: "", weapon_id: 13, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_galilar.png",
      type: "rifle",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_famas",
      name: "FAMAS | Default",
      weapon: { id: "", weapon_id: 10, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_famas.png",
      type: "rifle",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },

    // Submetralhadoras
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_mac10",
      name: "MAC-10 | Default",
      weapon: { id: "", weapon_id: 17, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_mac10.png",
      type: "smg",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_mp9",
      name: "MP9 | Default",
      weapon: { id: "", weapon_id: 34, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_mp9.png",
      type: "smg",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_mp7",
      name: "MP7 | Default",
      weapon: { id: "", weapon_id: 33, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_mp7.png",
      type: "smg",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_mp5sd",
      name: "MP5-SD | Default",
      weapon: { id: "", weapon_id: 23, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_mp5sd.png",
      type: "smg",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_ump45",
      name: "UMP-45 | Default",
      weapon: { id: "", weapon_id: 24, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_ump45.png",
      type: "smg",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_p90",
      name: "P90 | Default",
      weapon: { id: "", weapon_id: 19, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_p90.png",
      type: "smg",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_bizon",
      name: "PP-Bizon | Default",
      weapon: { id: "", weapon_id: 26, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_bizon.png",
      type: "smg",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },

    // Escopetas
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_nova",
      name: "Nova | Default",
      weapon: { id: "", weapon_id: 35, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_nova.png",
      type: "shotgun",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_xm1014",
      name: "XM1014 | Default",
      weapon: { id: "", weapon_id: 25, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_xm1014.png",
      type: "shotgun",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_sawedoff",
      name: "Sawed-Off | Default",
      weapon: { id: "", weapon_id: 29, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_sawedoff.png",
      type: "shotgun",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_mag7",
      name: "MAG-7 | Default",
      weapon: { id: "", weapon_id: 27, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_mag7.png",
      type: "shotgun",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },

    // Metralhadoras
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_m249",
      name: "M249 | Default",
      weapon: { id: "", weapon_id: 14, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_m249.png",
      type: "machinegun",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Weapon,
      id: "weapon_negev",
      name: "Negev | Default",
      weapon: { id: "", weapon_id: 28, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_negev.png",
      type: "machinegun",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },

    // Facas
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife",
      name: "Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 0, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/skins/weapon_knife.png",
      type: "knife",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_kukri",
      name: "Kukri | Default",
      weapon: { id: "weapon_knife_kukri", weapon_id: 526, name: "Kukri | Default" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/skins/weapon_knife_kukri.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_bayonet",
      name: "Bayonet | Default",
      weapon: { id: "weapon_bayonet", weapon_id: 500, name: "Bayonet | Default" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_bayonet.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_butterfly",
      name: "Butterfly Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_butterfly.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_karambit",
      name: "Karambit | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_karambit.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_m9_bayonet",
      name: "M9 Bayonet | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_m9_bayonet.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_tactical",
      name: "Huntsman Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_tactical.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_falchion",
      name: "Falchion Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_falchion.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_push",
      name: "Shadow Daggers | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_push.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_survival_bowie",
      name: "Bowie Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_survival_bowie.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_ursus",
      name: "Ursus Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_ursus.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_gypsy_jackknife",
      name: "Navaja Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_gypsy_jackknife.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_stiletto",
      name: "Stiletto Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_stiletto.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_widowmaker",
      name: "Talon Knife | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_widowmaker.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Knife,
      id: "weapon_knife_css",
      name: "Classic Knife | Default",
      weapon: { id: "", weapon_id: 9, name: "" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/weapon/weapon_knife_css.png",
      type: "knife",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },
    {
      weapon_type: WeaponType.Glove,
      id: "default_gloves",
      name: "Gloves | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/skins/default_gloves.png",
      type: "gloves",
      team: {
        id: "both",
        name: "Both Teams"
      }
    },

    // agents
    {
      weapon_type: WeaponType.Agent,
      id: "default_agent_tr",
      name: "Agent TR | Default",
      weapon: { id: "weapon_awp", weapon_id: 9, name: "AWP" },
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/defaults/agent-tr.png",
      type: "agents",
      team: {
        id: "terrorists",
        name: "Terrorist"
      }
    },
    {
      weapon_type: WeaponType.Agent,
      id: "default_agent_ct",
      name: "Agent CT | Default",
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      image: "/defaults/agent-ct.png",
      type: "agents",
      team: {
        id: "counter-terrorists",
        name: "Counter-Terrorist"
      }
    },

    // music
    {
      weapon_type: WeaponType.Music,
      id: "default_music",
      name: "No Music | Default",
      image: "/defaults/music.png",
      description: "",
      exclusive: false,
      market_hash_name: "",
      type: "musics",
      rarity: {
        id: "",
        name: "",
        color: "#797979"
      },
      team: {
        id: "",
        name: ""
      }
    }
  ]
}
