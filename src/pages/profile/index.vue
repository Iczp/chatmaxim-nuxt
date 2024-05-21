<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
// import { ClientJS } from 'clientjs';

const fingerprint = ref('');
const visitorId = ref('');

// import { useCookie } from '#app';
// const counter = useCookie('counter');
const counter = ref<string | number | null>(0);
// counter.value = counter.value || Math.round(Math.random() * 1000);

const plus = () => {
  counter.value = '888';
};
const aaa = () => {
  counter.value = '111';
};

const generate = () => {
//   const client = new ClientJS();
//   fingerprint.value = client.getFingerprint().toString();
};
onMounted(async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  visitorId.value = result.visitorId;
});
</script>

<template>
  <div>
    <h1>您的唯一识别码 visitorId: {{ visitorId }}</h1>

    <h1 @click="generate">您的唯一识别码 fingerprint: {{ fingerprint }}</h1>

    <h1>计数器: {{ counter || '-' }}</h1>
    <button @click="counter = null">重置</button>
    <button @click="plus()">减少</button>
    <button @click="aaa">增加</button>
  </div>
</template>
