<script lang="ts" setup>
import type { Skin } from "~/models/skin.model"

const store = useSkinStore()
const auth = useAuthStore()
const userStore = useUserStore()

const props = defineProps({
  title: String,
  items: Object as () => Skin[],
  team: Boolean
})

const skinWeapons = (weaponId: string) => {
  return store.skins?.filter((k) => k.weapon?.id === weaponId)
}

const selected = (weapon: Skin): Skin => {
  const dbSkin = userStore.rows.find((row) => {
    const found = row.weapon_defindex === weapon.weapon?.weapon_id

    const team = row.weapon_team == (props.team ? 3 : 2)

    if (found) {
      console.log(row, weapon, team, props.team ? 3 : 2)
    }

    return found && team
  })

  console.log(userStore.rows)

  if (dbSkin) {
    return (
      store.skins?.find((k) => Number.parseInt(k.paint_index ?? "0") === dbSkin.weapon_paint_id) ??
      weapon
    )
  }

  return weapon
}

const selectSkin = (skin: Skin) => {
  userStore.selectSkin(auth.steamId!, skin)
}
</script>
<template>
  <div>
    <div class="flex flex-col">
      <p class="text-2xl font-bold">{{ props.title }}</p>
      <HomeInventoryCard
        v-for="item in props.items"
        :key="item.id"
        :weapon="item"
        :items="skinWeapons(item.id)"
        :selected="selected(item)"
        @select-skin="selectSkin"
      />
    </div>
  </div>
</template>
