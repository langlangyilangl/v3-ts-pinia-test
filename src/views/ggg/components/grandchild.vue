<template>
  <div>
    <h3>这是孙子组件</h3>
    {{ person }}
    <h3 style="color: red">这是bus的订阅 on</h3>
    {{ flag }}
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { Ref } from 'vue';
import bus from '@/bus';
type Person = {
  name: string;
  son?: Person;
};
const person = inject<Ref<Person>>('me');

// ---------------------
let flag = ref<Boolean>(false);
bus.on('flag', (flags) => {
  console.log(flag.value);
  flag.value = flags;
});
</script>

<style lang="scss" scoped></style>
