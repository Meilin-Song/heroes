 //导入路由
import VueRouter from 'vue-router';

//导入vue vue是node-module里面的 可以直接导入文件名称
import Vue from 'vue'; 

//先导入组件(所有依赖的导入 都写在最前面)
import HeroesList from '../views/heroes/list.vue';
import EquipsList from '../views/equips/list.vue';
import WeaponsList from '../views/weapons/list.vue';
//导入添加英雄的组件
import HeroesAdd from '../views/heroes/Add.vue';


//注册VueRouter插件  以后可以用this.$router this.$route
//相当于挂载路由  让vue去用路由
Vue.use(VueRouter);




//创建路由对象
var router = new VueRouter({
    //配置激活的类样式
    //激活哪个 哪个就有样式
    linkExactActiveClass:'active',
    routes:[
        //首页 默认显示英雄页
        {path:'/',redirect:'/heroes'},
        
        //注意 name、path是字符串
        //组件不能加引号 是一个模块
        {name:'heroes',path:'/heroes',component:HeroesList},
        {name:'heroadd',path:'/heroes/add',component:HeroesAdd},
        {name:'equips',path:'/equips',component:EquipsList},
        {name:'weapons',path:'/weapons',component:WeaponsList}
       

    ]
})

//导出路由对象
export default router; 
//导出的是对象  此处router就是对象 



//单文件中 组件  - 设置路由对象（路由规则）- vm属性router设置路由  都是在script中完成 
//所以文件是专门设置路由对象  所以是被main.js所引用
