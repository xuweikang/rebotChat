<template>
  <div class="addDialog">
    <input type="text" placeholder="说点什么... " @keyup.enter="send" id="robot">
    <div class="send">
      <img src="/static/img/回车.png" alt="" width="24" height="35" @click="send">
    </div>
  </div>

</template>
<script>
import {getDialog,getRebotContent} from '../../api/api';
export default {
  name: 'addDialog',
  methods:{
    send:function(){
      var now=new Date();
      var hh=now.getHours();
      var mm=now.getMinutes();
      var h_m=hh+':'+mm;
      let userNew={"msg":document.getElementById('robot').value,"role":"2","time":h_m};
      this.$store.commit('updateDialog',{newMsg:userNew,id:this.$route.params.id});
      getRebotContent({'key':'9857cf36b0bc4a48b8ba3f976e43a4cf','userid':'1234','info':document.getElementById('robot').value}).then((res) => {
             let rebotNew={"msg":res.data.text,"role":"1","time":h_m};
             this.$store.commit('updateDialog',{newMsg:rebotNew,id:this.$route.params.id});
             document.getElementById('robot').value='';
             setTimeout(function(){
               document.getElementsByTagName('body')[0].scrollTop=document.getElementsByTagName('body')[0].offsetHeight+500;
             },100)
        })

    }
  }
}
</script>
<style>
   .addDialog{
     position: fixed;
    bottom: 0;
    width: 100%;
   }
   .addDialog .send{
    position: absolute;
    top: 0px;
    right: 33px;
   }
	.addDialog input{
    padding: 7px;
    width: 88%;
    border: none;
    border: 1px solid #999;
    border-radius: 14px;
    padding-left: 15px;
    outline: none;

  }
</style>
