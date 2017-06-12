<template>
	<div class="topBar">
		<mt-button @click='goBack' v-if="!isShowTx" class='back-btn top-img'><img src="/static/img/返回.png" height="25" width="25" slot="icon" >
			<span>Google Assistant</span>
		</mt-button>
    <mt-button v-if="isShowTx" @click='doNothing' class='top-img user_tx'><img :src='userData.tx' height="25" width="25" slot="icon">
    </mt-button>
		<mt-button v-if="!isShowTx" @click='doNothing' class='tx top-img' ><img src="/static/img/2.jpg" height="25" width="25" slot="icon">

		</mt-button>


	</div>
</template>
<script>
import {getUser} from '../../api/api';
export default {
  name: 'topBar',
 computed:{
   userData(){
     return this.$store.state.user;
   },
   isShowTx(){
     return this.$store.state.isShowTx;
   }
 },
  methods: {
    goBack:function(){
      this.$router.push({name:'dialogList'});
      //修改topBar状态
      this.$store.commit('setNavbar');
    },
    doNothing:function(){
      return;
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
