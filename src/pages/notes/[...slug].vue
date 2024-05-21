<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);
// const contentConfig = $content.config
// console.log(contentConfig)
// const content = ({ page, surround, globals, optons } = useContent());
const query = queryContent();
</script>

<template>
  <main class="content">
    <!-- $content.config:{{ content }} -->
    <h1>queryContent:{{ query }}</h1>
    <!-- <h2>内容导航: {{ navigation }}</h2> -->
    <!-- <h2>ContentQuery</h2>
    <ContentQuery :path="$route.path" find="dev" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery> -->

    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="`/notes${link._path}`">
            {{ link.title }}
            <a-badge :count="link.children?.length || 0"></a-badge>
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>

    <h3>目录</h3>
    <ul>
      <ContentList path="/" v-slot="{ list }">
        <li v-for="article in list" :key="article._path">
          <h3>
            <NuxtLink :to="`/notes${article._path}`">
              {{ article.title }}({{ article._path }})
            </NuxtLink>
          </h3>
          <p>{{ article.description }}</p>
        </li>
      </ContentList>
    </ul>

    <!-- <ContentDoc path="/web/css/selectors" /> -->

    <h3>$route.params.slug</h3>
    <p>{{ $route.params.slug }}</p>
    <h2>$route.path:{{ $route.path }}</h2>

    <ContentDoc :path="`../${$route.path}`" v-slot="{ doc }">
      <template>
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <!-- <template #not-found> Not Found! </template> -->
    </ContentDoc>
  </main>
</template>
<style lang="scss">
.content {
  color: aqua;
}
</style>
