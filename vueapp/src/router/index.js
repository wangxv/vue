import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'
import VueResource  from 'vue-resource'
import HelloMusic from '@/components/HelloMusic'
import MyIndex from '@/components/MyIndex'
import SignIn from '@/components/SignIn'
import BroadcastingStation from '@/components/BroadcastingStation'
import ClassificationList from '@/components/ClassificationList'
import RangkingList from '@/components/RangkingList'
import Singer from '@/components/Singer'
import Search from '@/components/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloMusic',
      component: HelloMusic
    },
    {
    	path:'/index',
    	name:'MyIndex',
    	component: MyIndex
    },
    {
    	path:'/signin',
    	name:'SignIn',
    	component: SignIn
    },
    {
      path:'/broadcastingStation',
      name:'BroadcastingStation',
      component: BroadcastingStation
    },
    {
      path:'/classificationList',
      name:'ClassificationList',
      component: ClassificationList
    },
    {
      path:'/rangkingList',
      name:'RangkingList',
      component: RangkingList
    },
    {
      path:'/singer',
      name:'Singer',
      component: Singer
    },
    {
      path:'/search',
      name:'Search',
      component: Search
    },
  ]
})
