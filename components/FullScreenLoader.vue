<script lang="ts" setup></script>
<template>
  <div class="fullscreen-loader">
    <span class="loading loading-spinner w-[50px] text-yellow-600"></span>
  </div>
</template>
<style scoped>
.fullscreen-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
</style>
