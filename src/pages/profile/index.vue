<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { ClientJS } from 'clientjs';

const fingerprintVisitorId = ref('');
const clienjsVisitorId = ref('');

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

const generateClienjsVisitorId = () => {
  const client = new ClientJS();
  clienjsVisitorId.value = client.getFingerprint().toString();
};

const generateFingerprintVisitorId = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  fingerprintVisitorId.value = result.visitorId;
};
onMounted(async () => {
  generateClienjsVisitorId();
  generateFingerprintVisitorId();
});
</script>

<template>
  <div>
    <div>
      您的唯一识别码 clienjsVisitorId:3444035521
      <button @click="generateClienjsVisitorId">
        {{ clienjsVisitorId }}
      </button>
    </div>

    <div>
      您的唯一识别码 fingerprint: d806fcff2a3d50870df65b5e9e75b045
      <button @click="generateClienjsVisitorId">
        {{ fingerprintVisitorId }}
      </button>
    </div>

    <h1>计数器: {{ counter || '-' }}</h1>
    <button @click="counter = null">重置</button>
    <button @click="plus()">减少</button>
    <button @click="aaa">增加</button>


    <!-- <RouterView></RouterView> -->
    <NuxtPage />
  </div>
</template>
