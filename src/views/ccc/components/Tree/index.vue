<template>
  <div>
    <div v-for="item in value" class="Tree" @click.stop="sendItem(item.name)">
      {{ item.name }}
      <index v-if="item?.children?.length" :value="item.children" @on-click="sendItem"/>
    </div>
  </div>
</template>

<script setup lang="ts">
type treeList = {
  name: string;
  children?: treeList[];
};

type Props = {
  value?: treeList[];
};

defineProps<Props>();

const emit = defineEmits(['on-click'])

const sendItem = (name:string)=>{
  emit('on-click',name)
}
</script>

<style lang="scss" scoped>
.Tree {
  margin-left: 20px;
  width: 100px;
}
</style>
