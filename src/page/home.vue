<template>
 <div>
  <h1 @click="change({type:1})">
      我是首页
  </h1>
 
 </div>
</template>

<script>

import {mapState,mapActions} from 'vuex';


export default {
    created(){
        console.log(this.list)
    },
    data(){
        return {

        }
    },
    methods:{
      setindex(index){
         return index + Math.random()
      },
      ...mapActions('home',['change']),
    
    },
    computed:{
        ...mapState('home',['list'])
    }

}
</script>

<style>

</style>