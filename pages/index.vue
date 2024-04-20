<template>
  <NavBars></NavBars>
  <AppHeader>AppHeader</AppHeader>
  <NuxtLink to="about">About</NuxtLink>
  <NuxtLink to="/">Home</NuxtLink>
  <div>
    <h1>Welcome to the homepage</h1>
    <h2>
      <Icon name="uil:github" color="black" />
      appConfig.theme
    </h2>
    <!-- <AppAlert> This is an auto-imported component. </AppAlert> -->
  </div>
  <AppFooter>AppFooter</AppFooter>
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
