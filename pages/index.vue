<template>
  
  <AppHeader>AppHeader</AppHeader>
  <NuxtLink to="about">About</NuxtLink>

  <section>
    <p>index</p>
  </section>
</template>
<script setup lang="ts">
// import { useHead } from '#app';

// const appConfig = useAppConfig();

// console.log(appConfig.theme);

useHead({
  title: 'ChatMaxim',

  meta: [
    { name: 'description', content: 'My amazing site.' },
    { name: 'keywords', content: 'iczp.net' },
  ],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
