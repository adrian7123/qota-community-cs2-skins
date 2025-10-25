<script lang="ts" setup>
import { WeaponType, type Skin } from "~/models/skin.model"
import { Cs2Helper } from "~/shared/helpers/cs2.helper"
import { slugify, splitName } from "~/shared/helpers/helper"
import { getImageUrl } from "~/shared/utils/get-image-url"

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
  console.log("Props skins:", props.weapon)
  switch (props.weapon!.weapon_type) {
    case WeaponType.Weapon: {
      selected.value = cs2.getSkin(
        props.weapon!,
        userStore.dbSkins,
        props.skins!,
        store.team ? 3 : 2
      )

      break
    }
    case WeaponType.Knife: {
      selected.value = cs2.getKnife(
        props.weapon!,
        userStore.dbKnives,
        userStore.dbSkins,
        props.skins!,
        store.team ? 3 : 2
      )

      break
    }
    case WeaponType.Music: {
      selected.value = cs2.getMusic(
        props.weapon!,
        userStore.dbMusics,
        store.musics,
        store.team ? 3 : 2
      )

      break
    }
    case WeaponType.Glove: {
      selected.value = cs2.getGlove(
        props.weapon!,
        userStore.dbGloves,
        userStore.dbSkins,
        props.skins!,
        store.team ? 3 : 2
      )

      break
    }
    case WeaponType.Agent: {
      selected.value = cs2.getAgent(
        props.weapon!,
        userStore.dbAgents,
        props.skins!,
        store.team ? 3 : 2
      )

      break
    }
  }
})

watch(search, (value) => {
  filteredSkins.value = props.skins?.filter((skin: any) =>
    skin.name.toLowerCase().includes(value.toLowerCase())
  )
})

const selectSkin = async (skin: Skin) => {
  selected.value = skin

  if (props.weapon?.weapon_type === WeaponType.Music) {
    await userStore.selectMusic(auth.steamId!, skin, store.team ? 3 : 2)
    return
  }

  if (props.weapon?.weapon_type === WeaponType.Agent) {
    await userStore.selectAgent(auth.steamId!, skin, store.team ? 3 : 2)
    return
  }

  if (props.weapon?.weapon_type === WeaponType.Glove) {
    await userStore.selectGlove(auth.steamId!, skin, store.team ? 3 : 2)
  }

  if (props.weapon?.weapon_type === WeaponType.Knife) {
    await userStore.selectKnife(auth.steamId!, skin, store.team ? 3 : 2)
  }

  await userStore.selectSkin(auth.steamId!, skin, store.team ? 3 : 2)
}

const closeModal = () => {
  const skin = selected.value
  emit("selectSkin", skin)
}
</script>
<template>
  <div class="modal-box cursor-auto max-w-6xl min-h-[730px] !p-0 border border-gray-400">
    <form method="dialog">
      <button
        class="btn btn-sm btn-circle absolute transition-transform hover:scale-110 right-2 top-2 border-0"
        :style="
          selected?.rarity
            ? `background:
          linear-gradient(0deg, ${selected.rarity.color}50 100%, ${selected.rarity.color}50 0%),
          radial-gradient(60% 60% at 20% 50%, ${selected.rarity.color}cc 0%, ${selected.rarity.color}20 100%);`
            : ''
        "
        style="font-size: large; font-weight: bold"
        @click="closeModal()"
      >
        x
      </button>
    </form>
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
            class="card flex flex-col items-center justify-center text-center w-full transition-transform duration-300 hover:scale-110"
          >
            <span class="text-3xl">
              {{ splitName(selected.name)[0] }}
            </span>
            <img :src="getImageUrl(selected.image)" class="" />
            <div
              class="w-full flex flex-col items-center justify-center font-semibold text-gray-300"
            >
              <span class="text-3xl" :style="`color: ${selected.rarity?.color}`">
                {{ splitName(selected.name)[1] }}
              </span>
            </div>
          </div>
          <div
            v-if="selected.weapon_type === WeaponType.Music"
            :key="selected.image"
            class="flex justify-center mt-5"
          >
            <audio controls>
              <source
                :src="`https://wiki.cs.money/audio/${slugify(selected.name)}/mvp-anthem.mp3`"
              />
              <source
                :src="`https://wiki.cs.money/audio/music-kit-${slugify(
                  selected.name
                )}/mvp-anthem.mp3`"
              />
              Your browser does not support the audio element.
            </audio>
            <!-- <a
              class="text-blue-400 underline text-2xl"
              target="_blank"
              :href="`https://wiki.cs.money/music-kits/${slugify(selected.name)}`"
            >
              Escutar musica
            </a> -->
          </div>
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
              id="default-search"
              v-model="search"
              type="search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pesquisar skins"
              required
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
            class="card cursor-pointer flex flex-col items-center justify-center w-full border p-2 mb-2 transition-colors duration-00"
            :class="
              item.id === selected?.id ? 'border-4 border-green-500' : 'border-2 border-gray-500'
            "
            @click="selectSkin(item)"
          >
            <div class="translation-card flex flex-col items-center justify-center">
              <img :src="getImageUrl(item.image)" class="h-40 w-40" />
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
