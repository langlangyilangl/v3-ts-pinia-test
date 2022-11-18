<template>
  <div>
    <h2>tsx的使用</h2>
    <h3>{{ emitData }}</h3>
    <rendomDom data="父组件传来的" @jj="getEmitData"></rendomDom>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import rendomDom from './hhh';
const emitData = ref<string>('');

const getEmitData = (value: string) => {
  console.log(value + '==========>子组件传来的');
  emitData.value = value;
};
</script>

<style lang="scss" scoped></style>
