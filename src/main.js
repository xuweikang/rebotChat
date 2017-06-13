// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/index'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //获得初始化数据
  beforeCreate(){
    this.$store.dispatch('getDialogData');
    this.$store.dispatch('getUserData');
  },
  template: '<App/>',
  components: { App }
})
