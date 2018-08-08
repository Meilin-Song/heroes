//导入文件 定义变量  from
import Vue from 'vue'
import App from './App.vue'

//导入样式  直接导入文件不需要定义变量
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})

