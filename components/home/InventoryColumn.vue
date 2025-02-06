<script lang="ts" setup>
import type { Skin } from "~/models/skin.model"
import { type Cs2Weapon } from "~/shared/helpers/cs2.helper"
import InventoryCard from "./InventoryCard.vue"

const props = defineProps({
  title: String,
  items: Object as () => Cs2Weapon[] | Skin[]
})
</script>
<template>
  <div>
    <div class="flex flex-col">
      <p class="text-2xl font-bold">{{ props.title }}</p>
      <InventoryCard v-for="item in props.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
