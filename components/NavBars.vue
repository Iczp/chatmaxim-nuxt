<template>
  <div>
    <p>URL is: {{ url }}</p>
    <p>Path is: {{ url.pathname }}</p>
  </div>
  <nav>
    <ul class="nav-tabs">
      <li><a href="/">Home</a></li>
      <li>
        <a href="/about?id=123" :class="{ active: true }"
          >About{{ route.query }}</a
        >
      </li>
      <li>
        <h3>
          <a href="/product" @click="onClick">Product({{ counter }})</a>
        </h3>
        <ul>
          <li><a href="Profile">Product-subItem1</a></li>
          <li><a href="/login">Product-subItem2</a></li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="Profile">Profile</a></li>
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
