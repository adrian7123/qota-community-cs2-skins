<script lang="ts" setup>
import type { Skin } from "~/models/skin.model"

const store = useSkinStore()
const auth = useAuthStore()
const userStore = useUserStore()

const props = defineProps({
  title: String,
  items: Object as () => Skin[]
})

const skinWeapons = (weaponId: string) => {
  return store.skins?.filter((k) => k.weapon?.id === weaponId)
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
      />
    </div>
  </div>
</template>
