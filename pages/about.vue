<script setup lang="ts">
const { data } = await useFetch('/api/test');
console.log('/api/test', data);
</script>
<template>
  <section>
    <p>About{{ data }}</p>
  </section>
</template>
