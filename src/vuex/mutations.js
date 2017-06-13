// vuex中state的数据只能被mutations方法所更改
import {getDialog,getUser} from '../api/api';
const mutations = {

  //获取用户聊天信息
  getDialogData:(state)=>{
    getDialog().then((res) => {
      state.dialogue=res.data.data;
    });
  },
  
  //获取用户信息
  getUserData:(state)=>{
    getUser().then((res) =>{
      state.user=res.data.data;
    })
  },
  //修改isShowTx状态
  setNavbar:(state)=>{
    state.isShowTx=!state.isShowTx;
  },
  //修改state.dialog
  updateDialog:(state,addData)=>{
    let data=state.dialogue;
    for(var i=0;i<data.length;i++){
      if(data[i].id==addData.id){
        data[i].contentList.push(addData.newMsg);
        break;
      }
    }
  }
};

export default mutations
