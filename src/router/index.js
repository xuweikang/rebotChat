import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dialog from '../components/dialog/dialogDetail'
import dialogList from '../components/dialogList/dialogList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dialogList',
      component: dialogList
    },
    {
    	path:'/djzy:id',
    	name:'dialogA',
    	component:dialog
    }
  ]
})
