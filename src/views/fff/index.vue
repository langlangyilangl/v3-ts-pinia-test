<template>
  <div>关于transitiond变换的</div>
  <div>
    <button @click="flag = !flag">变换</button>
    <Transition appear name="fade">
      <div v-if="flag" class="box"></div>
    </Transition>
    <hr />
    <button @click="randomList">random</button>
    <TransitionGroup move-class="mmm" class="container" tag="div">
      <div v-for="item in list" :key="item.id" class="item">
        {{ item.number }}
      </div>
    </TransitionGroup>
    <button @click="addItem">add</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, TransitionGroup } from 'vue';
import _ from 'lodash';

const flag = ref<Boolean>(true);

const list = ref(
  new Array(81).fill('').map((_, index) => {
    return { id: index, number: (index % 9) + 1 };
  })
);
const randomList = () => {
  list.value = list.value.sort(function () {
    return 0.5 - Math.random();
  });
};

const items = ref<number[]>([1, 2, 3]);
const addItem = () => {
  items.value.push(items.value.length + 1);
};
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 300px;
  background-color: aqua;
}
.fade-enter-from {
  width: 0;
  height: 0;
}
.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-leave-from {
  width: 300px;
  height: 300px;
}
.fade-leave-active {
  transition: all 1.5s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 11);

  .item {
    width: 25px;
    height: 25px;
    border: 1px black solid;
    margin: 1px;
  }
}

.mmm {
  transition: all 0.5s ease;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
