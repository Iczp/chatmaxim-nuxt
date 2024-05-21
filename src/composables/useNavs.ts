export const useNavs = () => {
  const route = useRoute();
  const selectedKeys = ref<string[]>([route.path]);

  const menus = ref([
    {
      key: 'index',
      url: '/',
      title: 'Home',
    },
    {
      key: 'docs',
      url: '/notes',
      title: 'Notes',
    },
    {
      key: 'product',
      url: '/product',
      title: 'Product',
    },
    {
      key: 'about',
      url: '/about',
      title: 'About',
    },
    {
      key: 'profile',
      url: '/profile',
      title: 'Profile',
    },
    {
      key: 'admin',
      url: '/admin',
      title: 'Admin',
    },
    {
      key: 'login',
      url: '/login',
      title: 'Sign in',
    },
  ]);

  return {
    menus,
    selectedKeys,
  };
};
