// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import vueResource from 'vue-resource'
import $ from 'jquery'
import qs from 'qs'

Vue.config.productionTip = false
 Vue.prototype.vaxios = vueAxios
 Vue.prototype.axios = axios
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
