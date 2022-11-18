<template>
  <h2>这个页面是演示基本语法的</h2>
  <div class="container">
    <div>
      <div :style="style">2222</div>
      <div>{{ something }}</div>
      <input type="text" v-model="something" />
      <div>{{ Man.name }}</div>
      <div>{{ m }}</div>
      <button @click="hh()">改变</button>
    </div>
    <div>
      <div style="font-size: 30px; color: red">computed</div>
      <table border style="width: 700px">
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="del(index)">删除</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>总价：{{ total }}</td>
        </tr>
      </table>
      <div style="margin-top: 100px">
        <div style="color: red; font-size: 30px">watch</div>
        <input type="text" v-model="msg1" />
        <div>new:{{ msg1 }}</div>
        <hr />
        <div>
          <div>监听深层对象</div>
          <input type="text" v-model="user.name.neinei" />
        </div>
        <hr />
        <div>
          <div>监听对象中的其中一个</div>
          <input type="text" v-model="aa.bb" />
          <input type="text" v-model="aa.cc" />
          <input type="text" v-model="aa.dd.ee" />
        </div>
        <hr />
        <div>
          <div>watchEffect使用</div>
          <input type="text" v-model="massage1" />
          <input type="text" v-model="massage2" />
        </div>
      </div>
    </div>
    <div>111</div>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import { ref, toRef, reactive, computed, isRef, watch, watchEffect } from 'vue';
type Style = {
  color: string;
  height: string;
};

const style: Style = {
  color: 'red',
  height: '50px',
};

const something = ref('test');

console.log(something);

const Man = ref<any>({ name: 'huta0' });

const m = reactive({ name: 'hh', age: 18 });

const age = toRef(m, 'age');

const hh = () => {
  Man.value.name = 'xiajun';
  m.age = 16;
  console.log(Man);
};

// --------------------
// computed
type Good = {
  name: string;
  num: number;
  price: number;
};
const data = reactive<Good[]>([
  {
    name: '胡涛',
    num: 1,
    price: 5,
  },
  {
    name: '夏俊',
    num: 2,
    price: 6,
  },
  {
    name: '谢旗峰',
    num: 3,
    price: 3,
  },
]);

const total = computed<number>(() => {
  return data.reduce((prev: number, next: Good) => {
    return prev + next.num * next.price;
  }, 0);
});

const del = (index) => {
  data.splice(index, 1);
};
// ----------------
// watch

const msg1 = ref<string>('');

watch(msg1, (new1, old) => {
  console.log(new1);
  console.log(old);
});

// 深度监听
const user = ref({
  name: {
    neinei: 111,
  },
});
watch(
  user,
  (new1, old) => {
    console.log(new1);
    console.log('old', old);
  },
  {
    deep: true,
  }
);

const aa = reactive({
  bb: 11,
  cc: 'aaa',
  dd: {
    ee: 'ccc',
  },
});
watch(
  aa,
  (new1, old) => {
    console.log(new1);
    console.log('old', old);
  },
  {
    deep: true,
  }
);

// ------------
// watchEffect使用
const massage1 = ref<string>('wuhu');
const massage2 = ref<string>('qifei');
const massage3 = ref<string>('hh');
const massage4 = ref<string>('hh');

watchEffect(() => {
  console.log(massage1.value);
  console.log(massage2.value);
  console.log(massage3.value);
});
</script>

<style scoped>
.app {
  width: 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
