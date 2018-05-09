<template>
  <!--<div>{{show}}</div>-->
  <Counter></Counter>
</template>
<style scoped lang="less">
</style>

<script>
//  export default {
//    computed:{
//      show(){
//          return this.store.state.count
//      }
//    },
//    created(){
//        this.$axios.get('archives/managemengt/getDataType').then(function () {
//        })
//    }
//  }
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
