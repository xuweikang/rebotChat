<template>
 <div>
   <div class="tlq">
  <div class="dialogue" v-for="item in msg">
    <div class="item">
      <div class="itemWrap">
        <div v-if='item.role==="1"'>
          <div class="left tx"><img :src='txUrlRebot' alt="" width='40' height="40"></div>
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
import {getDialog} from '../../api/api';
import addDialog from './addDialog';
import Bus from '../../common/bus.js';
export default {
  name: 'dialogDetail',
  components:{
    'add-dialog':addDialog
  },
  props:['newMsg'],
  data(){
     return{
        'data':'123',
        'msg':[],
        'txUrlRebot':'',
        'newMsg':this.newMsg

     }
  },
  beforeCreate:function(){
        getDialog({'id':this.$route.params.id}).then((res) => {
             this.data=res.data.data;
             this.msg=res.data.data.contentList;
           
             // console.log(this.msg)
             this.txUrlRebot=res.data.data.tx;
        })
  },
  computed:{
    getDialog(){
      getDialog().then((res) => {
            return res.data.data;
        })

    }
  },
  created:function(){
 

       var now=new Date();
       var hh=now.getHours();
       var mm=now.getMinutes();
       var h_m=hh+':'+mm;

       Bus.$on('userData',data=>{
    
          this.msg.push({"msg":data,"role":"2","time":h_m});

  
       })
    
       Bus.$on('rebotCallData',data=>{
          // console.log(flag)
  
      
          this.msg.push({"msg":data,"role":"1","time":h_m});
      
          setTimeout(function(){
             document.getElementsByTagName('body')[0].scrollTop=document.getElementsByTagName('body')[0].offsetHeight+300;
           },100);
          this.$emit('newDialogue',[this.$route.params.id,this.msg]);
       })
  },
  mounted:function(){
       
    },
  methods: {
    
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