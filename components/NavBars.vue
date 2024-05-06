<template>
  <div>
    <p>URL is: {{ url }}</p>
    <p>Path is: {{ url.pathname }}</p>
  </div>
  <nav>
    <ul class="nav-tabs">
      <li><a href="/">Home</a></li>
      <li>
        <h3>
          <a href="/docs">Docs</a>
        </h3>
        <ul>
          <!-- <ContentList path="/docs">
            <template #default="{ list }">
              <li v-for="item in list" :key="item._path">
                <h2>
                  <a :href="item._path">{{ item.title }}</a>
                </h2>
                <p>{{ item.description }}</p>
              </li>
            </template>
            <template #not-found>
              <p>No items found.</p>
            </template>
          </ContentList> -->
        </ul>
      </li>
      <li>
        <a href="/about?id=123" :class="{ active: true }"
          >About{{ route.query }}</a
        >
      </li>
      <li>
        <h3>
          <a href="/product">Product({{ counter }})</a>
        </h3>
        <ul>
          <li><a href="/product/1?id=1">Product-1</a></li>
          <li><a href="/product/2?id=2">Product-2</a></li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <a href="Profile" @click="onClick">Profile({{ counter }})</a>
      </li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
// const router = useRouter();
// console.log('router', router);
const route = useRoute();
console.log('route', route);

const url = useRequestURL();

const counter = ref(0);
const onClick = (e: any) => {
  e.preventDefault();
  counter.value++;
  console.log('click', e);
  return false;
};
</script>
<style>
.nav-tabs {
  font-size: 16px;
}

.active {
  color: red;
}
</style>
