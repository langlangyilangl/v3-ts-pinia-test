<template>
  <div>
    我是子组件
    <div>
      <h2>匿名插槽</h2>
      <!-- <slot /> -->
      <hr />
    </div>
    <div>
      <h2>具名插槽 #header</h2>
      <slot name="header" />
      <hr />
    </div>
    <div>
      <h2>作用域+具名插槽 #body="{data}"</h2>
      <slot name="body" :data="sendParentData" />
      <hr />
    </div>
    <div>
      <h2>默认作用域插槽 #defalut="{data}"</h2>
      <slot :data="sendParentData" />
      <hr />
    </div>
    <div>
      <h2>动态插槽</h2>
      <slot name="hh" :data="sendParentData"/>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
type Peason = {
  name: string;
  age: number;
};
const sendParentData = reactive<Peason>({
  name: '胡涛',
  age: 18,
});
</script>

<style lang="scss" scoped></style>
