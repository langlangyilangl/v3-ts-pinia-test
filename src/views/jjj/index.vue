<template>
  <div>
    <h2 @click="hh">directive指令的使用</h2>
    <input type="text" v-model="value" />
    <div v-Move="{ background: value }">1111</div>
  </div>
</template>

<script setup lang="ts">
import { DirectiveBinding, Directive } from 'vue';

const value = ref('skyblue');

// 全生命周期的的完整控制
// const vMove: Directive = {
//   mounted(el: HTMLElement, dir: DirectiveBinding) {
//     el.style.background = dir.value.background;
//     console.log('=======>mouned');
//   },
//   updated(el: HTMLElement, dir: DirectiveBinding) {
//     el.style.background = dir.value.background;
//     console.log('=======>updated');
//   },
// };

// ---------
// 省略版本
const vMove: Directive = (el, dir) => {
  el.style.background = dir.value.background;
};
const hh = (e: any) => {
  console.log(e);
  e.style.left = e.clientX + 'px';
  e.style.top = e.clientY + 'px';
};
</script>

<style lang="scss" scoped></style>
