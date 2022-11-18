<template>
  <div>
    <h2>v-model在父子组件使用</h2>
    <div>isShow:{{ isShow }}</div>
    <button @click="buttonDialog">开关</button>
    <div>input:{{ data }}</div>
    <hr />
    <A v-model="isShow" v-model:text.hh="data"></A>
  </div>
</template>

<script setup lang="ts">
import A from './components/ChildA.vue';
const isShow = ref<boolean>(true);
const buttonDialog = () => {
  isShow.value = !isShow.value;
};

const data = ref('胡涛哈哈哈');
</script>

<style lang="scss" scoped></style>
