<template>
  <h2>这个页面是演示父子调用的</h2>
  <div>
    这是父组件
    <child
      ref="getExposeValue"
      :data="value"
      wuhu="zhebokeyi"
      @on-click="getChildValue"
    />
    <hr />
    <button @click="getChildExpose">子组件传值给父,通过expose</button>
  </div>
</template>

<script setup lang="ts">
import child from './components/Child.vue';
import { ref, toRef, reactive, computed, isRef, watch, watchEffect } from 'vue';

const value = reactive([1, 2, 3]);
const getChildValue = (childValue) => {
  console.log(childValue);
};

// --------------
// defineExpose的使用
const getExposeValue = ref<InstanceType<typeof child>>();
const getChildExpose = () => {
  console.log(getExposeValue.value?.name);
  getExposeValue.value?.getAge(18);
  console.log(typeof child);
};
</script>

<style lang="scss" scoped></style>
