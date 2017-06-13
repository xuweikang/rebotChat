<template>
  <div id="app">
    <top-bar></top-bar>

    <router-view></router-view>
  </div>
</template>

<script>
//加载需要使用的组件
import topBar from './components/topBar/topBar'
import Vue from 'vue';


 const Bus = new Vue()


export default {
  name: 'app',
  data(){
    return{
      data:[]
    }
  },

  components:{
    topBar
  },
  methods:{
    newDialogue1:function(data){
      this.data=data;
      // console.log(this.data)
    }
  }
}
</script>

<style>
#app {
  
}
</style>
