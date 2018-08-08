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

// main.js是主页文件  对应的app.vue 

// 先把静态页面放到app.vue的template里面

// 然后把相关的css文件放到assets静态文件中

// 在主文件 main.app引入app.vue 进行渲染

// 引入bootstrapcss文件  静态css文件设置样式

// 然后发现里面用到的字体图标  不能应用 然后必须在webpake.config.js中配置字体图标


