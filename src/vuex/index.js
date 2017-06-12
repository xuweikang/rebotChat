import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './action'

// 注册vuex
Vue.use(Vuex)

// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
let state = {
 	//最重要的全局的聊天记录数据
 	dialogue:[],
  //用户初始化信息
  user:{},
 	//是否显示头部头像
 	isShowTx:true
}

// 导出一个新生成的Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
