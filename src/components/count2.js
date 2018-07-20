/**
 * Created by heyangjie on 2018/5/10.
 */

export default {
  // data:function () {
  //   return {
  //     count:this.$store.count
  //   }
  // },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods:{
    change(){
      this.$store.commit('increment')
    }
  },
  template:'<button v-on:click="change">点击{{count*2}}</button>' +
  ''
}

