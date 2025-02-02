<script lang="ts" setup>
const route = useRoute();

const store = useAuthStore();

onBeforeMount(() => {
  if (route.query["openid.mode"] === "id_res") {
    store.saveUser(route.query);
  }
});
</script>
<template>
  <div class="flex bg-primary h-screen w-screen items-center justify-center">
    <img
      class="cursor-pointer"
      src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
      @click="store.login"
    />
  </div>
</template>

<style></style>
