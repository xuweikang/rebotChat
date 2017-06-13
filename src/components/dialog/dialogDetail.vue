<template>
 <div>
   <div class="tlq">
  <div class="dialogue" v-for="item in getNowDialog[0]">
    <div class="item">
      <div class="itemWrap">
        <div v-if='item.role==="1"'>
          <div class="left tx"><img :src="getNowDialog[1]" alt="" width='40' height="40"></div>
          <div class="d_content content-rebot">{{item.msg}}</div>
        </div>
        <div v-if='item.role==="2"'>
        <div class="right tx"><img src="/static/img/1.jpg" alt="" width='40' height="40"></div>
          <div class="d_content content-user">{{item.msg}}</div>

        </div>
      </div>
    </div>
  </div>
 </div>
  <add-dialog></add-dialog>
</div>

</template>
<script>
import addDialog from './addDialog';
export default {
  name: 'dialogDetail',
  components:{
    'add-dialog':addDialog
  },
  computed:{
    getNowDialog(){
      let data=this.$store.state.dialogue;
      for(var i=0;i<data.length;i++){
        if(data[i].id==this.$route.params.id){
          return [data[i].contentList,data[i].tx]
        }
      }
    },

  }
}
</script>
<style>
.tlq{
  margin-top:60px;
  padding-bottom: 30px;
}
.dialogue .left{
  float: left;
}
.dialogue .right{
  float: right;
}
.dialogue .item{
  position: relative;
      min-height: 49px;
    margin-bottom: 2px;
}
.d_content{
   max-width: 65%;
   display:inline-block;
  border-radius: 14px;
  color: #fff;
  padding: 6px 15px 6px 7px;
  font-size: 14px;
}
.dialogue img{
  border-radius: 50%
}
.content-rebot{
 background: #3D88F6;
  margin-top: 6px;
  margin-left: 14px;

}
.content-user{
    background: #03AFC5;
    float: right;
    margin-top: 6px;
    margin-right: 14px;
}

</style>
