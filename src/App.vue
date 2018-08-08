 <template>
    <div id="app">
    <!-- 头部header  组件名称 注意dom中必须是小写短横线格式-->
       <app-header></app-header>

       <div class="container-fluid">
          <div class="row">
            <!-- 侧边导航栏sidebar -->
              <app-sidebar></app-sidebar>
              <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <!-- 列表管理  根据不同路由列表变化-->
                <!-- 路由占位 -->
                <router-view></router-view>

          </div>
         </div>
      </div>
    </div>
</template>

<script>

   
 
  //导入头部组件
   //es6写法
    import AppHeader from './components/AppHeader.vue';
    import AppSidebar from './components/AppSidebar.vue';

    //导出组件 (template用)
    export default {
      //局部组件
      components:{
        // AppHeader:AppHeader
        AppHeader, 
        AppSidebar
      }

      
    }
</script>

<style>

</style>
