<script lang="ts" setup>
const global = useGlobalStore()
const auth = useAuthStore()
</script>

<template>
  <MyHeader v-if="auth.user" />
  <NuxtPage />
  <FullScreenLoader v-if="global.loading" />
</template>
