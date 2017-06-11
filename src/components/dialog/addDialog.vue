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
import Bus from '../../common/bus.js';
export default {
  name: 'addDialog',
  methods:{
    send:function(){
      getRebotContent({'key':'9857cf36b0bc4a48b8ba3f976e43a4cf','userid':'1234','info':document.getElementById('robot').value}).then((res) => {
             // console.log(res.data.text); 
              setTimeout(function(){
                 Bus.$emit('rebotCallData', res.data.text);
              },500);
             
             Bus.$emit('userData', document.getElementById('robot').value);
             document.getElementById('robot').value='';
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