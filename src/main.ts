import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card/index.vue'  //定义全局组件
import { createPinia } from 'pinia' 


import * as echarts from 'echarts'
import china from '@/assets/china.json';
echarts.registerMap('china', china);

const pinia = createPinia()

createApp(App).use(pinia).component('Card',Card).mount('#app')
