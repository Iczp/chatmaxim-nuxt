<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
  id?: any;
}>();



</script>

<template>
  <NuxtLink to="/">Home</NuxtLink>

  <p>route.params:{{ $route.params }},route.query:{{ $route.query }}</p>
  <section>
    <h1>Product--- props:{{ props }} {{ id || '++' }}</h1>
  </section>
</template>
