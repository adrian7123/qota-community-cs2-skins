<script lang="ts" setup>
const store = useSkinStore();

onMounted(() => {
  store.initialize();
});

const pistols = ref([
  {
    name: "Glock-18",
    price: 200,
    image: "/weapon/weapon_glock.png",
  },
  {
    name: "P250",
    price: 300,
    image: "/weapon/weapon_p250.png",
  },
  {
    name: "Dual Berettas",
    price: 300,
    image: "/weapon/weapon_elite.png",
  },
  {
    name: "R8 Revolver",
    price: 300,
    image: "/weapon/weapon_revolver.png",
  },
  {
    name: "Desert Eagle",
    price: 700,
    image: "/weapon/weapon_deagle.png",
  },
  {
    name: "Tec-9",
    price: 500,
    image: "/weapon/weapon_tec9.png",
  },
  {
    name: "CZ75-Auto",
    price: 750,
    image: "/weapon/weapon_cz75a.png",
  },
]);
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="card bg-terrorist w-full h-full rounded-sm p-4 flex">
      <p class="text-4xl font-bold mb-2">Terrorist Loadout</p>

      <div class="flex flex-col w-1/5 items-center">
        <p class="text-2xl font-bold">Pistols</p>
        <div
          class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-600 p-2 mb-2 border-b-red-500 border-b-6"
          v-for="item in pistols"
          :key="item.name"
        >
          <img :src="item.image" class="h-32 w-32" />
          <div class="w-full flex justify-center font-semibold text-gray-300">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.translation-card {
  background-color: var(--color-terrorist);

  transition: transform 0.4s;

  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.translation-card:hover {
  transform: scale(1.1);
}
</style>
