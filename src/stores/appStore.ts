export const useAppStore = defineStore('app', {
  state: () => ({
    name: '',
    description: '',
  }),
  actions: {
    async fetch() {
      //   const infos = await $fetch('https://api.nuxt.com/modules/pinia');

      // this.name = 'Chat Maxim';
      // this.description = 'Chat Maxim';
    },
  },
});
