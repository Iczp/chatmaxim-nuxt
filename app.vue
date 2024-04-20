<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

const appConfig = useAppConfig();

console.log(appConfig.theme);
</script>
