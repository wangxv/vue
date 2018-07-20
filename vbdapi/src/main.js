// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import $ from 'jquery'
import qs from 'qs'

Vue.config.productionTip = false
<<<<<<< HEAD
Vue.prototype.axios = axios;
Vue.use(VueResource);
=======
 Vue.prototype.vaxios = vueAxios
 Vue.prototype.axios = axios
>>>>>>> f588966936a400750563f0db51751e8801fef970


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
