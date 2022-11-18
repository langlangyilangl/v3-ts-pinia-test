import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card/index.vue'  //定义全局组件
import { createPinia } from 'pinia' 

const pinia = createPinia()
createApp(App).use(pinia).component('Card',Card).mount('#app')
