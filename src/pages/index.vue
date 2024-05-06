<template>
  <main>
    appStore: {{ appStore.name }}
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
      <h3>index data:</h3>

      <ul>
        <li v-for="(item, key) in data" :key="key">
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="(item1, key1) in item" :key="key1">
              <h3>{{ key1 }}</h3>
              <ul>
                <li v-for="(item2, key2) in item1" :key="key2">
                  <h3>{{ key2 }}</h3>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>
</template>
<script setup lang="ts">
// import { useHead } from '#app';

// const appConfig = useAppConfig();

// console.log(appConfig.theme);
const appStore = useAppStore();
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

const { data } = useFetch(
  'http://10.0.5.20:8044/api/abp/application-configuration',
  {
    method: 'get',
  }
);
</script>
