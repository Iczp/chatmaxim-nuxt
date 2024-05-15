<script setup lang="ts">
// const router = useRouter();
// console.log('router', router);
const route = useRoute();
console.log('route', route);
const activeKey = ref('1');
const url = useRequestURL();

const counter = ref(0);
const onClick = (e: any) => {
  e.preventDefault();
  counter.value++;
  console.log('click', e);
  return false;
};

// import { h, ref } from 'vue';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: 'mail',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
  },
  {
    key: 'app',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: h(
      'a',
      { href: 'https://antdv.com', target: '_blank' },
      'Navigation Four - Link'
    ),
    title: 'Navigation Four - Link',
  },
]);
</script>
<template>
  <!-- <client-only>
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
  </client-only> -->

  <div>
    <p>URL is: {{ url }}</p>
    <p>Path is: {{ url.pathname }}</p>
  </div>

  <!-- <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render
      >Content of Tab Pane 2</a-tab-pane
    >
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs> -->

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

<style>
.nav-tabs {
  font-size: 16px;
}

.active {
  color: red;
}
</style>
