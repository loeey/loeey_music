import Vue from 'vue'
import App from './App.vue'
// 引入字体样式文件

import '@/mobile/flexible.js'
import '@/styles/reset.css'
import router from '@/router'
import 'vant/lib/index.css';
//注册全局（按需导入）


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

