<template>
  <AppHeader>AppHeader</AppHeader>
  <NuxtLink to="about">About</NuxtLink>
  <ContentDoc></ContentDoc>

  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }} {{ link }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>

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
