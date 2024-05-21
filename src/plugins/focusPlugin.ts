export default defineNuxtPlugin((nuxtApp) => {

  // nuxtApp.vueApp.use(router => {
  //   router.mode = 'hash'; // 设置路由模式为哈希
  // });


    nuxtApp.vueApp.directive('focus', {
      mounted (el) {
        el.focus()
      },
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })
  })