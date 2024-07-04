<script setup lang="ts">
// const route = useRoute();
const props = defineProps<{
  id?: any;
}>();

// const id = route
</script>

<template>
  <NuxtLink to="/">Home</NuxtLink>
  <p>route.params:{{ $route.params }},route.query:{{ $route.query }}</p>


  <NuxtLink to="?to=100006">100006</NuxtLink>

  <section>
    <h1>Product--- props:{{ props }} {{ id || '++' }}</h1>
    <h3 v-for="item in 10">
      <NuxtLink :to="`${item}`">pro-{{ item }}</NuxtLink>
      <hr />
    </h3>
  </section>
</template>
