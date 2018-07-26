import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from '@/components/MyIndex'
import Car from '@/components/Car'
import Logo from '@/components/Logo'
import Greens from '@/components/Greens'
import Animal from '@/components/Animal'
import Plant from '@/components/Plant'

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
    },{
      path:'/logo',
      name:'Logo',
      component:Logo
    },
    {
      path:'/greens',
      name:'Greens',
      component:Greens
    },
    {
      path:'/animal',
      name:'Animal',
      component:Animal
    },
    {
      path:'/plant',
      name:'Plant',
      component:Plant
    },
  ]
})
