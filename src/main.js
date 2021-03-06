// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuex from 'vuex'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import axios from './axios'
import store from './store'
// 引入组件
// import count from './components/count'
// Vue.component('count-add', count);



//全剧注册组件
import count2 from './components/count2'
Vue.component('count-add2', count2);

import render1 from './components/rendertest1';
Vue.component('render1',render1 );

import SmartList from './components/functional';
Vue.component('SmartList',SmartList );

import Bus from './bus/bus.js'
Vue.prototype.Bus = Bus;

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
