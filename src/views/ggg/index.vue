<template>
  <h1>祖先</h1>
  <div>
    爷爷：{{ person.name }} 儿子：{{ person.son?.name }} 孙子：{{
      person.son?.son?.name
    }}
  </div>
  <button @click="change">改变孙子属性</button>
  <hr />
  <child />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import child from './components/child.vue';
type Person = {
  name: string;
  son?: Person;
};
const person = ref<Person>({
  name: 'lang',
  son: {
    name: 'tao',
    son: {
      name: 'jun',
    },
  },
});

provide('me', person);

const change = () => {
  person.value.son!.son!.name = 'junjun';
};
</script>

<style lang="scss" scoped></style>
