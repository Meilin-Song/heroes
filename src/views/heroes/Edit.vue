<template>
    <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="sex">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="英雄性别">
          </div>
          
          <button @click.prevent="handleEdit" type="submit" class="btn btn-success">提交</button>
        </form>
    </div> 
</template>
<script>

import axios from 'axios';

export default {
    //通过在路由规则里 设置props：true给组件传值id
    props:['id'],
    data(){
        return{
            formData:{
                name:'',
                gender:''
            }
        }
    },
    //根据id请求英雄对象
    created(){
        // axios.get('http://localhost:3001/heroes'+this.id)
        axios
                .get(`http://localhost:3001/heroes/${this.id}`)
                .then((response)=>{
                    if(response.status===200){
                        // this.formData.name = response.data.name;
                        //    this.formData.gender = response.data.gender;
                        this.formData = response.data;
                    }else{
                        alert('错误')
                    }

                })
                .catch((err)=>{
                    console.log(err)
                })

    },
    methods:{
         handleEdit(){
            axios
                .put(`http://localhost:3001/heroes/${this.id}`,this.formData)
                .then((response)=>{
                    if(response.status===200){
                        //修改成功 跳回主页面
                        this.$router.push('/heroes');
                    }else{
                        alert('修改失败');
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
    }
   

}
    

</script>
<style>

</style>

