<script lang="ts" setup>
import type { Cs2Weapon, Skin } from "~/models/skin.model"

const props = defineProps({
  item: {
    type: Object as () => Cs2Weapon | Skin,
    required: true
  },
  agent: Boolean,
  knife: Boolean,
  gloves: Boolean,
  music: Boolean,
  team: String
})

const show = ref(false)

const openModal = (item: any) => {
  show.value = true
  const modal = document.getElementById(item) as any
  modal.showModal()
}
</script>
<template>
  <div
    :key="props.item.name"
    class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
    @click="() => openModal(item.id)"
  >
    <img :src="item.image" class="h-28 w-32" />
    <div class="w-full flex justify-center font-semibold text-gray-300">
      {{ item.name }}
    </div>
    <dialog :id="item.id" class="modal">
      <HomeInventoryModal
        v-if="show"
        :weapon="item"
        :agent="props.agent"
        :knife="props.knife"
        :gloves="gloves"
        :music="music"
        :team="team"
      />
    </dialog>
  </div>
</template>
