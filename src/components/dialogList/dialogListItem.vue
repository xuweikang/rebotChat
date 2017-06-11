<template>
	<div class="dialogitem">
   <div class="dialogListItem" v-for="item in data">
    <div class="item-wrap" @click='goDialog(item.id)'>
      <div class="left">
        <div class="tx">
          <img :src='item.tx' alt="" width="30" height="30">
        </div>
      </div>
      <div class="content">
        <div class="rebotname">{{item.name}}</div>
        <div class="firstDialog">{{item.contentList[item.contentList.length-1].msg}}</div>
      </div>
      <div class="right">
        <div class="time">{{item.contentList[item.contentList.length-1].time}}</div>
      
        <mt-badge type="primary">{{item.contentList.length}}</mt-badge>
      </div>
    </div>
  </div> 
  </div>
</template>
<script>
import {getDialog} from '../../api/api';
import Bus from '../../common/bus.js';
export default {
  name: 'dialoglistItem',
  props:["newMsg"],
  data(){
     return{
        'data':'123',
        'firstDialog':''
     }
  },
  
  beforeCreate:function(){
        getDialog().then((res) => {
            this.data=res.data.data
            // console.log(this.newMsg);
            var newD=this.data;
            if(this.newMsg){
              for(var i=0;i<newD.length;i++){
                if(newD[i].id==this.newMsg[0]){
                  newD[i].contentList=this.newMsg[1];
                }
              }
            }
        })
  },
  methods:{
    goDialog:function(id){
      this.$router.push({name:'dialog', params: { id:id }});
      //给兄弟组件topBar发送信号
      Bus.$emit('isShowTx', 1);
      //发送一个点击信号
      Bus.$emit('isClick',{_id:id});

    }
  }
}
</script>
<style>
.dialogitem{
  width: 100%;
  padding: 0 8px;
}
.dialogListItem{
  position: relative;
  padding: 6px;
}
.item-wrap{overflow: hidden;height: 50px}
.dialogListItem .left{
  position: absolute;
  left: 0;
  height:30px;
  border-radius: 50%;
  overflow: hidden;
  top:10px;
}
.dialogListItem .content{
  position: absolute;margin-left: 45px
}
.dialogListItem .right{
  position: absolute;
  right: 0;
  margin-right: 13px;
}
.firstDialog{
  color: #918d8d;
      width: 161px;
    overflow: hidden;
    height: 22px;
}
.dialogListItem .time{
  color: #918d8d
}
.mint-badge.is-size-normal{
  font-size: 9px;
  margin-left: 9px
}
	
</style>