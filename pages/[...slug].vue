<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);
</script>

<template>
  <main class="content">
    <h1>++++++++++++++++</h1>
    <h2>
      {{ navigation }}
    </h2>
    <!-- <h2>ContentQuery</h2>
    <ContentQuery :path="$route.path" find="dev" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery> -->

    <h3>目录</h3>
    <ul>
      <ContentList path="/" v-slot="{ list }">
        <li v-for="article in list" :key="article._path">
          <h2>
            <a :href="article._path">{{ article.title }}</a>
          </h2>
          <p>{{ article.description }}</p>
        </li>
      </ContentList>
    </ul>

    <p>{{ $route.params.slug }}</p>
    <ContentDoc :path="$route.path" v-slot="{ doc }">
      <article>
        <!-- <h1>{{ doc.title }}</h1> -->
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
<style lang="scss">
.content {
  color: aqua;
}
</style>
