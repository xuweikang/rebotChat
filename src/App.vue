<template>
  <div id="app">
    <top-bar></top-bar>
    
    <router-view v-on:newDialogue='newDialogue1' :newMsg='data'></router-view>
  </div>
</template>

<script>
//加载需要使用的组件
import topBar from './components/topBar/topBar'
import dialogList from './components/dialogList/dialogList'
import dialog from './components/dialog/dialog'
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
    topBar,
    dialogList,
    dialog,
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
