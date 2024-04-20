<template>
  <main class="content">
    <h1>++++++++++++++++</h1>
    <p>{{ $route.params.slug }}</p>
    <ContentDoc :path="$route.path" />
  </main>
</template>
<style lang="scss">

.content{


}
</style>
