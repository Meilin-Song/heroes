<template>
    <div>
         <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" class="form-control" id="name" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <input type="text" class="form-control" id="sex" placeholder="英雄性别">
          </div>
          
          <button type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>
<script>

    export default {

    }
    
// 这个组件 需要被router.js导入 进行路由分配

</script>
<style>

</style>



