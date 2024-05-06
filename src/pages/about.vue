<script setup lang="ts">
const { data } = await useFetch('/api/test');
console.log('/api/test', data);

const env = ref(process.env.NUXT_API_BASE);
const config = useRuntimeConfig();
</script>
<template>
  <section>
    <!-- env:{{ env }} -->
    <!-- config:{{ config }} -->
    <p>About{{ data }}</p>

    <h3>33</h3>
  </section>
</template>
