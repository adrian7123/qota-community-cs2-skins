export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const authStore = useAuthStore()
    authStore.initialize()

    if (to.path.includes("/login") && authStore.user) {
      return reloadNuxtApp({ path: "/" })
    }

    if (!authStore.user && !to.path.includes("/login")) {
      return reloadNuxtApp({ path: "/login" })
    }
  }
})
