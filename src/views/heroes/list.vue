<template>
   <div>
       <h2 class="sub-header">英雄管理</h2>
          <!-- <a class="btn btn-success" href="add.html">添加</a> -->
          <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <!-- 遍历每行，渲染每列数据 必须绑定一个key唯一值 -->
                <tr v-for="(item,index) in list" :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <!-- <a href="edit.html">edit</a> -->
                    <router-link :to="'/heroes/'+item.id">edit</router-link>
                    &nbsp;&nbsp;
                    <a @click.prevent="(handleDelete(item.id))" href="javascript:void(0)">delete</a>
                    <!-- <router-link :to="'/heroes/'+item.id">删除</router-link> -->
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
   </div>
    
</template>

<script>
    //导入axios
    import axios from 'axios';
    export default {
    //一个组件就是一个vue实例 也可以有很多项
      data(){
        return{
          //将axios请求出来的结果放在这里
          list:[]
        }
      },
      //vm刚创建好 就发送axios 因为是异步请求 时间慢 页面加载好 请求正好有响应
      created(){
        this.loadData();
      },
      methods:{
        //加载列表数据
        loadData(){
           axios
            .get('http://localhost:3001/heroes')
            .then((response)=>{
                // console.log(response)
                if(response.status===200){
                  this.list = response.data;
                }
              
            })
            .catch((err)=>{
              console.log(err);
            })
        },
        handleDelete(id){
          if(!confirm('是否要删除数据？')){
            return;
          }
          axios
              .delete(`http://localhost:3001/heroes/${id}`)
              .then((response)=>{
                if(response.status===200){
                  //  this.list = response.data;
                  this.loadData();
                }else{
                  alert('删除失败');
                }
              })
              .catch((err)=>{
                console.log(err);
              })
        }
      }



    };
</script>

<style>

</style>

