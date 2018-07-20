import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const vuex = new Vuex.Store({
  state: {
    count: 0,
    message:0
  },
  // 同步事物
  mutations: {
    increment (state) {
      state.count++
    },
    notify(state,value){
      state.message += value
    }
  },
  // 异步事物
  actions:{
    notify(context,value){
      setTimeout(()=>{
        context.commit('notify',value)
      },2000)
    }
  },
  //计算属性复用
  getters:{
    getMessage:state =>{
      return state.message + '测试一下下'
    },
    getMessageById:(state)=>(id)=>{
       return state.message + id
    }
  }
});
export default vuex
