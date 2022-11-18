<template>
  <div>父子通信的教程</div>
  <div>我是子组件</div>
  <div>{{ data }}</div>
  <div>{{ wuhu }}</div>
  <div>{{ defalut }}</div>
  <hr />
  <button @click="sendFatherValue('我一定行')">
    点击给父组件传值(log查看)
  </button>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

// -----------------
//父传子
type Props = {
  data: number[];
  wuhu: string;
  defalut: string;
};
withDefaults(defineProps<Props>(), {
  data: () => [123, 321], //当父组件没有定义值时，这个值为默认
  wuhu: () => 'yulang',
  defalut: () => '我是没传的默认值',
});

//--------
//子传夫defineEmits
const emit = defineEmits<{
  (e: 'on-click', name: string): void; //可以name设置为object或者number传其他类型值进来
}>();

const sendFatherValue = (str: string) => {
  emit('on-click', str);
};

//defineExpose可以实现子传父,子的方法给父用父的参数
defineExpose({
  name: '胡涛',
  getAge: (age: number) => {
    console.log('age:' + age + '  //父组件带值调用子组件方法');
  },
});
</script>

<style lang="scss" scoped></style>
