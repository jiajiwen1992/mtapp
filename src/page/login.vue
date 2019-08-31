<template>
  <div>
      <h1>
          请登录
      </h1>
      
      <button @click="denglu">登录</button>
  </div>
</template>

<script>
export default {
    methods:{
        login:function(){
            
        },
        denglu:function(){
         this.$router.push('/home');
          
        }
        
    }

}
</script>

<style>

</style>