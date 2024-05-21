export default defineNuxtRouteMiddleware((to, from) => {
  console.log('routeMiddleware', to, from);

  if (to.params.id === '1') {
    return abortNavigation();
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    return navigateTo('/');
  }

  // 完全在客户端跳过中间件
  if (process.client) return
});
