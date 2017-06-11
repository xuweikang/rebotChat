<template>
	<div class="topBar">
		<mt-button @click='goBack' v-if="!isShowTx" class='back-btn top-img'><img src="/static/img/返回.png" height="25" width="25" slot="icon" >
			<span>Google Assistant</span>
		</mt-button>
    <mt-button v-if="isShowTx" class='top-img user_tx'><img :src='data.tx' height="25" width="25" slot="icon">
    </mt-button>
		<mt-button v-if="!isShowTx" class='tx top-img' ><img src="/static/img/2.jpg" height="25" width="25" slot="icon">
		
		</mt-button>


	</div>
</template>
<script>
import {getUser} from '../../api/api';
import Bus from '../../common/bus.js';
export default {
  name: 'topBar',
  data(){
    return {
      data:'123',
      isShowTx:true
    }
  },
  created(){
      Bus.$on('isShowTx',flag=>{
          // console.log(flag)
          if(flag==1){
            this.isShowTx = false;
          }else{
            this.isShowTx = true;
          }
          
       })
      if(this.$route.path.indexOf('/dialog')!=-1){
        this.isShowTx = false;
      }else{
        this.isShowTx = true;
      }
  
  },
  beforeCreate:function(){
        getUser().then((res) => {
            this.data=res.data.data
        })
  },
  methods: {
    goBack:function(){
      this.$router.push({name:'dialogList'});
      this.isShowTx=true;
    }
  }
}
</script>
<style>
  .topBar{
    position: fixed;
    top:0;
    width: 100%;
    background: white;
    z-index: 1000;
  }
  .top-img{
  	background: none;
  	border:none;
  	box-shadow: none;
  }
  .topBar .tx{float: right;}
  .user_tx img{
    border-radius: 50%
  }
	
</style>