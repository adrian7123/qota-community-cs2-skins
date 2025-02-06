export const useGlobalStore = defineStore("useGlobalStore", {
  state: () => ({
    loading: false
  }),
  actions: {
    show() {
      this.loading = true
    },
    hide() {
      this.loading = false
    }
  }
})
