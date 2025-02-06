<script lang="ts" setup>
const global = useGlobalStore()
</script>

<template>
  <MyHeader />
  <NuxtPage />
  <FullScreenLoader v-if="global.loading" />
</template>
