<template>
  <p>{{ $route.params.slug }}</p>

  <h1>我是父视图</h1>
  <NuxtPage :foobar="123" />
</template>


<script setup lang="ts">
definePageMeta({
  title: '我的主页'
})
</script>