<template>
  <div>
    <h2>电影名称</h2>
    <div v-for="item in data.data.films">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
const { data } = await axios({
  method: 'get',
  url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=2&pageSize=10&type=1&k=440568',
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.2.1","e":"16677268724787033109168129"}',
    'X-Host': 'mall.film-ticket.film.list',
  },
});
</script>

<style lang="scss" scoped></style>
