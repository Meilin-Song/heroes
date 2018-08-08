<template>
    <div>
         <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="英雄性别">
          </div>
          
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>
<script>
    //导入axios
    import axios from 'axios';
    export default {
        //数据
        data(){
            return{
                //绑定文本框 将来post给服务器的数据
                formData:{
                    name:'',
                    gender:''

                }
            }
        },
        methods:{
            handleAdd(){
                axios.post('http://localhost:3001/heroes',this.formData)
                .then((response)=>{
                    //添加成功的时候 状态码是201
                    if(response.status===201){
                        //跳转到列表页
                        this.$router.push('/heroes');

                    }else{
                        alert('添加失败')
                    }

                })
                .catch((err)=>{
                    console.log(err);
                })

            }
        }

    }
    
// 这个组件 需要被router.js导入 进行路由分配

</script>
<style>

</style>



