<template>
  <div v-if="modelValue" class="box">
    <h2>dialog框</h2>
    <button @click="deleteDialig">删除dialog</button>
    <div>
      <input type="text" :value="text" @input="changeInputValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: boolean;
  text: string;
  textModifiers?: {
    hh: string;
  };
};

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue', 'update:text']);
const deleteDialig = () => {
  emit('update:modelValue', false);
};

const changeInputValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit(
    'update:text',
    props?.textModifiers?.hh ? target!.value + 'hh' : target!.value
  );
};
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 300px;
  border: 1px red solid;
}
</style>
