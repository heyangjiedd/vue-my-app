<template>
  <div>
    <child1 :click1="click1" :mainVaule1="mainVaule1"></child1>
    <div>父组件{{mainVaule1}}</div>
    <child2  @upup="childchange"  :click2="click2" :mainVaule2="mainVaule2"></child2>
    <div>父组件{{mainVaule2}}</div>

    <child3></child3>
    <child4></child4>

    <child5></child5>
    <child6></child6>
  </div>

</template>

<script>
  import child1 from './child1.vue'
  import child2 from './child2.vue'
  //使用全局bus分发事件
  import child3 from './child3.vue'
  import child4 from './child4.vue'

  import child5 from './child5.vue'
  import child6 from './child6.vue'

  export default {
    components:{child1,child2,child3,child4,child5,child6},
    name: "main",
    created(){

    },
    data(){
      return {
        mainVaule1:12,
        mainVaule2:24
      }
    },
    methods:{
      click1(value){
        this.mainVaule1 += value;
        this.mainVaule2 += value;
      },
      click2(value){
        this.mainVaule1 += value;
        this.mainVaule2 += value;
      },
      childchange(value){
        this.mainVaule1 += value*2;
        this.mainVaule2 += value*2;
      }
    }
  }
</script>

<style scoped>

</style>
