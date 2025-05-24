<script lang="ts" setup>
const global = useGlobalStore()
const auth = useAuthStore()
</script>

<template>
  <MyHeader v-show="auth.user" />
  <NuxtPage />
  <FullScreenLoader v-if="global.loading" />
</template>
