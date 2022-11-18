<template>
  <div>
    <h2>pinia使用</h2>
    <div>姓名：{{ user.name }}</div>
    <div>性别：{{ user.sex }}</div>
    <div>年龄：{{ user.age }}</div>
    <div>{{ user.ageAddOne }}</div>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/store';
// 如果要修改,给属性加响应式
import { storeToRefs } from 'pinia';

const { user } = useStore();
const { age } = storeToRefs(user);

const changeAge = () => {
  // age!.value = 100;
  // user.ageAdd(1);
  user.$patch((state) => {
    state.age = 20;
  });
};

user.$subscribe((arg, state) => {
  console.log(arg);
  console.log(state);
});


</script>

<style lang="scss" scoped></style>
