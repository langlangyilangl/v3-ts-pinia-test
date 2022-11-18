<template>
  <h2>这个页面是演示组件使用</h2>
  <div>
    <h3>这是一个全局组件</h3>
    <Card data="说实话有点困" />
  </div>
  <hr />
  <div>
    <h3>这是一个递归组件</h3>
    <span
      >一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 FooBar.vue
      的组件可以在其模板中用{{ name }}引用它自己。
    </span>
    <Tree :value="treedata" @on-click="getItemName" />
  </div>
  <hr/>
  <div>
    <h3>这是一个异步组件</h3>
    <Suspense>
      <template #default>
        <Actived />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw, defineAsyncComponent } from 'vue';
import Tree from './components/Tree/index.vue';
// import Actived from "./components/actived/index.vue";

const Actived = defineAsyncComponent(
  () => import('./components/actived/index.vue')
);

const name = ref('<FooBar />');

type treeList = {
  name: string;
  children?: treeList[];
};

const treedata = reactive<treeList[]>([
  {
    name: '1',
    children: [
      {
        name: '1-1',
        children: [
          {
            name: '1-1-1',
          },
        ],
      },
      {
        name: '1-2',
        children: [
          {
            name: '1-2-1',
          },
        ],
      },
    ],
  },
  {
    name: '2',
  },
]);

const getItemName = (name) => {
  console.log(name);
};
</script>

<style lang="scss" scoped></style>
