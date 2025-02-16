<script lang="ts" setup>
const route = useRoute()

const store = useAuthStore()

onBeforeMount(() => {
  if (route.query["openid.mode"] === "id_res") {
    store.saveUser(route.query).then(() => reloadNuxtApp({ path: "/" }))
  }
})
</script>
<template>
  <div class="flex flex-col h-screen w-screen items-center">
    <div class="flex items-center mt-40">
      <div class="w-30 rounded-full mr-2">
        <img class="rounded-full" src="/logo.jpg" />
      </div>
      <span class="text-5xl font-bold"> Qota Community Server inventory </span>
    </div>
    <img
      class="cursor-pointer mt-10 w-60"
      src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
      @click="store.login"
    />
  </div>
</template>

<style></style>
