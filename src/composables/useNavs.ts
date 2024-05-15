export const useNavs = () => {
  const route = useRoute();
  const selectedKeys = ref<string[]>([route.path]);

  const menus = ref([
    {
      key: 'index',
      url: '/',
      title: '首页',
    },
    {
      key: 'docs',
      url: '/docs',
      title: '文档',
    },
    {
      key: 'product',
      url: '/product',
      title: '产品',
    },
    {
      key: 'about',
      url: '/about',
      title: '关于',
    },

    {
      key: 'login',
      url: '/login',
      title: '登录',
    },
  ]);

  return {
    menus,
    selectedKeys,
  };
};
