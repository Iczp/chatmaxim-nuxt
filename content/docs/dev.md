# Dev.md



## [渲染内容](https://nuxt.com.cn/docs/guide/directory-structure/content#渲染内容)

要渲染内容页面，使用[``](https://content.nuxt.com/components/content-doc)组件添加一个[catch-all路由](https://nuxt.com.cn/docs/guide/directory-structure/pages/#catch-all-route)：

pages/[...slug].vue



```vue
<template>
  <main>
    <ContentDoc :path="$route.path" />
  </main>
</template>
```
