<template>
  <div>这个页面是写slot的</div>
  <div>
    <Chlid>
      <!-- <slot> 匿名插槽内容 </slot> -->
      <template #header>
        <div>头部具名插槽内容</div>
      </template>
      <template #body="{ data }">
        <div>
          {{ data }}
        </div>
      </template>
      <template #default="{ data }">
        <div>{{ data }}</div>
      </template>
      <template #[getSlotName]>
        <div>这是动态插槽内容</div>
      </template>
    </Chlid>
  </div>
</template>

<script setup lang="ts">
import Chlid from './components/Child/index.vue';
import { ref } from 'vue';

const getSlotName = ref('hh');
</script>

<style lang="scss" scoped></style>
