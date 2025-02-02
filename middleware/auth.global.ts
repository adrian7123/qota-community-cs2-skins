export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const authStore = useAuthStore();
    authStore.initialize();

    if (!authStore.user && !to.path.includes("/login")) {
      return reloadNuxtApp({ path: "/login" });
    }

    if (to.path.includes("/login")) {
      return reloadNuxtApp({ path: "/" });
    }
  }
});
