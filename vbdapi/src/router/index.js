import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from '@/components/MyIndex'
import Car from '@/components/Car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyIndex',
      component: MyIndex
    },{
    	path:'/car',
    	name:'Car',
    	component:Car
    }
  ]
})
