<script lang="ts" setup>
const store = useSkinStore()

const props = defineProps({
  weapon: Object,
  agent: Boolean,
  knife: Boolean,
  gloves: Boolean
})

const skins = computed(() => {
  if (props.agent) {
    return store.agents
  }

  if (props.knife) {
    return store.skins?.filter((k) => k.category?.name === "Knives" && !k.id.includes("vanilla"))
  }

  if (props.gloves) {
    return store.skins?.filter((k) => k.category?.name === "Gloves" && !k.id.includes("vanilla"))
  }

  return store.skins?.filter((k) => k.weapon?.id === props.weapon?.id)
})
</script>
<template>
  <div class="modal-box max-w-6xl min-h-[700px]">
    <div class="flex h-[700px]">
      <div class="flex-1"></div>
      <div class="flex-1">
        {{ props.weapon }}

        <div class="mt-4 grid grid-cols-2 gap-4 max-h-[700px]">
          <div
            v-for="item in skins"
            :key="item.name"
            class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
          >
            <img :src="item.image" class="h-40 w-40" />
            <div class="w-full flex justify-center font-semibold text-gray-300">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</template>
