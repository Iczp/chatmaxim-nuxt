<script setup lang="ts">


const page = ref();
definePageMeta({
  title: '我的主页',
});
</script>

<template>
  <p>{{ $route.params.slug }}</p>
  <h1>我是父视图 Product</h1>
  <NuxtPage ref="page" :page-key="(route) => route.fullPath" />
</template>
