<template>
  <div class="card">
    <div>这是标题</div>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  data?: string;
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid saddlebrown;
}
</style>
