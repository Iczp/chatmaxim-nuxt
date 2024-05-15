<script lang="ts" setup>
import { reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const login = () => {
  console.log('login');
  const clientId = 'IM_Nuxt';
  const authHost = 'http://10.0.5.20:8043';
  //   const callbackUri = 'https://localhost:44344/swagger/oauth2-redirect.html';
  const callbackUri = 'http://localhost:3000/login/callback';
  const redirectUri = encodeURIComponent(callbackUri);
  const responseType = 'code';
  const scope = encodeURIComponent('openid profile email');
 
  const authUrl = `${authHost}/connect/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
  window.location.href = authUrl;

  //   https://localhost:44344/swagger/oauth2-redirect.html?code=WuYXfuTm6VdlLKgYLE4lc-6aFUHMt9GlF_6eagd3dtk&iss=http%3A%2F%2F10.0.5.20%3A8043%2F
};
</script>

<template>
  <div class="login-page">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    <a-divider>快捷登录</a-divider>

    <a-button type="primary" @click="login">OpenIdDict</a-button>
  </div>
</template>

<style lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
