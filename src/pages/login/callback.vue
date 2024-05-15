<script setup>
import { onMounted } from 'vue';
import axios from 'axios';

const route = useRoute();
const code = route.query.code; //new URLSearchParams(window.location.search).get('code');

const clientId = 'IM_Nuxt';
const authHost = 'http://10.0.5.20:8043';
const callbackUri = 'http://localhost:3000/login/callback';

const toQueryString = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj[p]) {
      let value = obj[p];
      if (typeof value == 'object') {
        // value = value.toString();
      }
      str.push(
        encodeURIComponent(p) +
          '=' +
          (value ? encodeURIComponent(value.toString()) : '')
      );
    }
  return str.join('&');
};

const { data, error, pending } = await useFetch(`${authHost}/connect/token`, {
  method: 'POST',
  server: true,
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
</script>

<template>
  <div>pending:{{ pending }}</div>
  <div>Callback processing... {{ $route.query }}</div>
  <div>data:{{ data }}</div>
  <div>error:{{ error }}</div>
</template>
