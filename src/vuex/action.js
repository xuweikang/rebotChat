// actions里存放的是异步操作
// 由于vuex中的state的变更只能由mutations进行操作，所以actions不直接进行数据操作，而是调用mutations方法


const actions = {
  //异步获取初始化数据
  getDialogData(context){
    context.commit('getDialogData');

  },
  getUserData(context){
    context.commit('getUserData');
  }
};

export default actions
