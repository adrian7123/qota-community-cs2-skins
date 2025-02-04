<script lang="ts" setup>
import { type Cs2Weapon } from "~/shared/helpers/cs2.helper"

const props = defineProps({
  title: String,
  items: Object as () => Cs2Weapon[]
})

const openModal = (item: any) => {
  ;(document.getElementById(item) as any)?.showModal()
}
</script>
<template>
  <div>
    <div class="flex flex-col col-span-1">
      <p class="text-2xl font-bold">{{ props.title }}</p>
      <div
        v-for="item in props.items"
        :key="item.name"
        class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
        @click="() => openModal(item.id)"
      >
        <img :src="item.image" class="h-28 w-32" />
        <div class="w-full flex justify-center font-semibold text-gray-300">
          {{ item.name }}
        </div>
        <dialog :id="item.id" class="modal">
          <HomeInventoryModal :weapon="item" />
        </dialog>
      </div>
    </div>
  </div>
</template>
