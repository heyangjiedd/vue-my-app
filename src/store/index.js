import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const vuex = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});
export default vuex
