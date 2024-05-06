<script setup lang="ts">
const { data } = await useFetch('/api/test');
console.log('/api/test', data);

const env = process.env.NUXT_API_BASE || 'env';
</script>
<template>
  <section>
    <p>About{{ data }}</p>

    <h3>33</h3>
  </section>
</template>
