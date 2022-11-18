<template>
  <div class="container">
    <menus />
    <div class="column">
      <heads />
      <content />
    </div>
  </div>
</template>

<script setup lang="ts">
import content from './Content/index.vue';
import menus from './Menu/index.vue';
import heads from './Header/index.vue';
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;

  .column{
    flex:1;
    display: flex;
    flex-direction: column;
  }
}
</style>
