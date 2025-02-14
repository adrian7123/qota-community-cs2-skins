<script lang="ts" setup>
import type { Skin } from "~/models/skin.model"
import { splitName } from "~/shared/helpers/helper"

const props = defineProps({
  weapon: {
    type: Object as () => any,
    required: true
  },
  items: { type: Object as () => Skin[], required: true },
  selected: { type: Object as () => Skin, required: true }
})

const show = ref(false)

const openModal = (item: any) => {
  show.value = true
  const modal = document.getElementById(item) as any
  modal.showModal()
}

const emit = defineEmits(["selectSkin"])

const selectSkin = (skin: Skin) => {
  emit("selectSkin", skin)
}
</script>
<template>
  <div
    v-if="selected"
    :key="selected.name"
    :style="
      selected.rarity
        ? `background:
                    linear-gradient(0deg, ${selected.rarity.color}20 0%, ${selected.rarity.color}20 100%),
                    radial-gradient(60% 60% at 50% 0%, ${selected.rarity.color}cc 0%, ${selected.rarity.color}20 100%);`
        : ''
    "
    class="card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2"
    @click="() => openModal(selected.unique)"
  >
    <div class="translation-card">
      <span class="hidden">{{ (selected.unique = selected.id + Date.now().toString()) }}</span>
      <img :src="selected.image" class="h-28 w-32" />
      <div class="w-full flex flex-col items-center justify-center font-semibold text-gray-300">
        <span class="text-xl">
          {{ splitName(selected.name)[0] }}
        </span>
        <span class="text-sm" :style="`color: ${selected.rarity?.color}`">
          {{ splitName(selected.name)[1] }}
        </span>
      </div>
    </div>
    <dialog :id="selected.unique" class="modal">
      <HomeInventoryModal
        v-if="show"
        :weapon="weapon"
        :skins="items"
        :selected="selected"
        @select-skin="selectSkin"
      >
        <template #music>
          <slot name="music" />
        </template>
      </HomeInventoryModal>
    </dialog>
  </div>
</template>
