export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.error('[Server] 错误：', error, instance, info);

    // 处理错误，例如上报到一个服务
  };

  // 也可以这样
  nuxtApp.hook('vue:error', (error, instance, info) => {
    // 处理错误，例如上报到一个服务
    console.error('[Client] 错误：', error, instance, info);
  });
});
