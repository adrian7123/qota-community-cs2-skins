<script lang="ts" setup>
import type { Skin } from "~/models/skin.model"
import { Cs2Helper } from "~/shared/helpers/cs2.helper"
import { splitName } from "~/shared/helpers/helper"

const store = useSkinStore()
const userStore = useUserStore()
const auth = useAuthStore()

const cs2 = new Cs2Helper()

const props = defineProps({
  weapon: Object as () => Skin,
  skins: Object as () => Skin[]
})

const emit = defineEmits(["selectSkin"])

const search = ref("")
const filteredSkins = ref(props.skins)
const selected = ref<Skin>()

onMounted(() => {
  selected.value = cs2.getSkin(props.weapon!, userStore.dbSkins, props.skins!, store.team ? 3 : 2)
})

watch(search, (value) => {
  filteredSkins.value = props.skins?.filter((skin: any) =>
    skin.name.toLowerCase().includes(value.toLowerCase())
  )
})

const selectSkin = async (skin: Skin) => {
  await userStore.selectSkin(auth.steamId!, skin, store.team ? 3 : 2)
  selected.value = skin
}

const closeModal = () => {
  const skin = selected.value
  emit("selectSkin", skin)
}
</script>
<template>
  <div class="modal-box cursor-auto max-w-6xl min-h-[730px] !p-0 border border-gray-400">
    <div
      class="flex h-[730px] overflow-y-hidden p-10"
      :style="
        selected?.rarity
          ? `background:
                    linear-gradient(0deg, ${selected.rarity.color}20 0%, ${selected.rarity.color}20 100%),
                    radial-gradient(60% 60% at 20% 50%, ${selected.rarity.color}cc 0%, ${selected.rarity.color}20 100%);`
          : ''
      "
    >
      <div class="flex-1 flex flex-col justify-evenly items-center">
        <div v-if="selected">
          <div
            class="card flex flex-col items-center w-full transition-transform duration-300 hover:scale-110"
          >
            <span class="text-3xl">
              {{ splitName(selected.name)[0] }}
            </span>
            <img :src="selected?.image" class="" />
            <div
              class="w-full flex flex-col items-center justify-center font-semibold text-gray-300"
            >
              <span class="text-3xl" :style="`color: ${selected.rarity?.color}`">
                {{ splitName(selected.name)[1] }}
              </span>
            </div>
          </div>
          <slot name="music" />
        </div>
      </div>
      <div class="flex-1">
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Pesquisar
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Icon icon="tabler:search" />
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pesquisar skins"
              required
              v-model="search"
            />
          </div>
        </form>

        <div class="mt-4 p-5 grid grid-cols-2 gap-4 max-h-[90%] scroll-smooth overflow-y-scroll">
          <div
            v-for="item in filteredSkins"
            :key="item.name"
            :style="
              item.rarity
                ? `background:
                    linear-gradient(0deg, ${item.rarity.color}20 0%, ${item.rarity.color}20 100%),
                    radial-gradient(60% 60% at 50% 0%, ${item.rarity.color}cc 0%, ${item.rarity.color}20 100%);`
                : ''
            "
            class="card cursor-pointer flex flex-col items-center justify-center w-full border border-gray-500 p-2 mb-2"
            @click="selectSkin(item)"
          >
            <div class="translation-card flex flex-col items-center justify-center">
              <img :src="item.image" class="h-40 w-40" />
              <div
                class="w-full flex flex-col items-center justify-center font-semibold text-gray-300"
              >
                <span class="text-sm text-center" :style="`color: ${item.rarity?.color}`">
                  {{ item.id.includes("agent") ? item.name : splitName(item.name)[1] }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button @click="() => closeModal()">close</button>
  </form>
</template>
