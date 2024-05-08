<script setup lang="ts">
const page = ref();
definePageMeta({
  title: '我的主页',
});
</script>

<template>
  <p>{{ $route.params.slug }}</p>
  <h1>我是父视图 Product</h1>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Title"
    sub-title="This is a subtitle"
    @back="() => null"
  />
  <NuxtPage ref="page" :page-key="(route) => route.fullPath" />
</template>
