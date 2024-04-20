<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h2>appConfig.theme :{{ appConfig.theme }}</h2>
    <!-- <AppAlert> This is an auto-imported component. </AppAlert> -->

    <NuxtWelcome />
  </div>
</template>


<script setup lang="ts">
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>

