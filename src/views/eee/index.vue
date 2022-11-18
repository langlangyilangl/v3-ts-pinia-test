<template>
  <h2>这个是写teleport和keep-alive</h2>
  <el-button type="primary" @click="dialogSwitch">打开dialog</el-button>
  <div v-if="switchs">
    <Teleport :disabled="false" to="#app">
      <Dialog />
    </Teleport>
  </div>
  <div>
    <!-- <el-button type="primary" @click="kaSwitch = !kaSwitch"
      >KeepAlive切换</el-button
    > -->
    <el-button type="primary" @click="current = 'A'">A</el-button>
    <el-button type="primary" @click="current = 'B'">B</el-button>
    <el-button type="primary" @click="current = 'C'">C</el-button>
    <KeepAlive :max="2">
      <A v-if="current == 'A'"></A>
      <B v-else-if="current == 'B'"></B>
      <C v-else></C>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import Dialog from '@/components/Dialog/index.vue';
import { ref } from 'vue';
import A from './components/FormA.vue';
import B from './components/FormB.vue';
import C from './components/FormB.vue';

let switchs = ref(false);
const dialogSwitch = () => {
  switchs.value = !switchs.value;
};


let current = ref<string>('A');
</script>

<style lang="scss" scoped></style>
