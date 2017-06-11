<template>
	<div class="dialogList" >
      <dialoglist-item :newMsg='newMsg'></dialoglist-item>
	</div>
</template>
<script>
import {getDialog} from '../../api/api';
import Bus from '../../common/bus.js';
import dialogListItem from './dialogListItem'
export default {
  name: 'dialogList',
  props:["newMsg"],
  data(){
    return {
      data1:this.$router.params._id,
      newMsg:this.newMsg
    }
  },
  components:{
    'dialoglist-item':dialogListItem
  },
  
  methods: {
  
  }
}
</script>
<style>
.dialogList{
      margin-top: 60px;
}
	
</style>