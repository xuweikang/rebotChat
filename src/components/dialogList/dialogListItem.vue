<template>
	<div class="dialogitem">
   <div class="dialogListItem" v-for="item in dialogueData">
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
export default {
  name: 'dialoglistItem',
  computed:{
    dialogueData(){
      return this.$store.state.dialogue;
    }
  },
  methods:{
    goDialog:function(id){
      this.$router.push({name:'dialogA', params: { id:id }});
      //修改topBar状态
      this.$store.commit('setNavbar');
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
