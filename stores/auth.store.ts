import { defineStore } from "pinia";

import { saveSteamUser, steamLogin } from "~/shared/utils/steam";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => ({
    user: null as any,
  }),
  actions: {
    initialize() {
      const user = localStorage.getItem("@steamUser");
      if (user) {
        this.user = JSON.parse(user);
      }
    },
    async login() {
      return await steamLogin();
    },
    async saveUser(query: any) {
      this.user = query;
      return await saveSteamUser(query);
    },
  },
});
