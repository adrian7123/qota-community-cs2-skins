<script lang="ts" setup>
import { WeaponType, type Skin } from "~/models/skin.model"
import { Cs2Helper } from "~/shared/helpers/cs2.helper"
import { splitName } from "~/shared/helpers/helper"

const userStore = useUserStore()
const store = useSkinStore()

const cs2 = new Cs2Helper()

const props = defineProps({
  weapon: {
    type: Object as () => Skin,
    required: true
  },
  items: { type: Object as () => Skin[], required: true }
})

const show = ref(false)

const selected = ref<Skin>()

onMounted(() => {
  switch (props.weapon!.weapon_type) {
    case WeaponType.Weapon: {
      selected.value = cs2.getSkin(
        props.weapon!,
        userStore.dbSkins,
        props.items!,
        store.team ? 3 : 2
      )

      break
    }
    case WeaponType.Knife: {
      selected.value = cs2.getKnife(
        props.weapon!,
        userStore.dbKnives,
        props.items!,
        store.team ? 3 : 2
      )

      break
    }
  }
})

const openModal = (item: any) => {
  show.value = true
  const modal = document.getElementById(item) as any
  modal.showModal()
}

const selectSkin = async (skin: Skin) => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  selected.value = skin
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
    @click="() => openModal(selected?.image)"
  >
    <div class="translation-card">
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
    <dialog :id="selected.image" class="modal">
      <HomeInventoryModal v-if="show" :weapon="weapon" :skins="items" @select-skin="selectSkin" />
    </dialog>
  </div>
</template>
