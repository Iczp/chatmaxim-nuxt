<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const code = route.query.code; //new URLSearchParams(window.location.search).get('code');

const clientId = 'IM_Nuxt';
const authHost = 'http://10.0.5.20:8043';
const callbackUri = 'http://localhost:3000/login/callback';

const { data, error, pending } = await useFetch(`/connect/token`, {
  method: 'POST',
  server: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: toQueryString({
    code: code,
    client_id: clientId,
    client_secret: undefined, // 仅限于非公开客户端
    redirect_uri: callbackUri,
    grant_type: 'authorization_code',
  }),
});
onMounted(() => {
  // navigateTo(`/login?from=callback`);
  console.log('关闭窗口');
  // 在弹出窗口中
  window.opener.postMessage(
    { status: 'loginSuccess', userId: '12345' },
    'http://localhost:3000'
  );
  // window.close();
});
</script>

<template>
  <div>pending:{{ pending }}</div>
  <div>Callback processing... {{ $route.query }}</div>
  <div>data:{{ data }}</div>
  <div>error:{{ error }}</div>
</template>
