# Hello Chat Maxim

## H2

### h3


``` js
<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/posts/1">文章1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">文章2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
```


### 导航
 1. 组件用于在页面之间创建链接。它会将

2. 标签渲染为具有href属性设置为页面的路由。一旦应用程序被渲染，页面的切换将在JavaScript中进行，通过更新浏览器URL来实现。这样可以避免整页刷新，同时允许实现动画过渡效果。当

3. 在客户端视口中可见时，Nuxt会自动预取链接页面的组件和负载（生成的页面），从而加快导航速度。