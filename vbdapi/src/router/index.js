import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from '@/components/MyIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyIndex',
      component: MyIndex
    }
  ]
})
