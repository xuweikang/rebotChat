<template>
	<div class="dialogList" >
      <dialoglist-item></dialoglist-item>
	</div>
</template>
<script>
import dialogListItem from './dialogListItem'
export default {
  name: 'dialogList',
  components:{
    'dialoglist-item':dialogListItem
  },
  computed:{
    dialogueData(){
      return this.$store.state.dialogue;
    }
  }
}
</script>
<style>
.dialogList{
      margin-top: 60px;
}

</style>
