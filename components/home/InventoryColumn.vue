<script lang="ts" setup>
import type { Cs2Weapon, Skin } from "~/models/skin.model"
import InventoryCard from "./InventoryCard.vue"

const store = useSkinStore()

const props = defineProps({
  title: String,
  items: Object as () => Cs2Weapon[] | Skin[]
})

const skinWeapons = (weaponId: string) => {
  return store.skins?.filter((k) => k.weapon?.id === weaponId)
}
</script>
<template>
  <div>
    <div class="flex flex-col">
      <p class="text-2xl font-bold">{{ props.title }}</p>
      <InventoryCard
        v-for="item in props.items"
        :key="item.id"
        :item="item"
        :items="skinWeapons(item.id)"
        :selected="skinWeapons(item.id)[0]"
      />
    </div>
  </div>
</template>
