<template>
  <div>
    <h2>这是儿子组件</h2>
    <button @click="change">改变儿子名字</button>
    {{ person?.son?.name }}
    <h2 style="color: red">Bus 发布的使用</h2>
    <button @click="changeFlag">改变flag</button>
    <hr />
    <grandchild />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { Ref } from 'vue';
import grandchild from './grandchild.vue';
import bus from '@/bus';
type Person = {
  name: string;
  son?: Person;
};
const person = inject<Ref<Person>>('me');
const change = () => {
  person!.value!.son!.name = 'taotaozi';
};
// ---------------
let flag: Boolean = false;
const changeFlag = () => {
  flag = !flag;
  bus.emit('flag', flag);
};
</script>

<style lang="scss" scoped></style>
