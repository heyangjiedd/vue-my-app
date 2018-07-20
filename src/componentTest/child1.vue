<template>
  <div>
    <button @click="child1click">click me ! child1</button>
    <p>子组件{{mainVaule1}}</p>
  </div>
</template>

<script>
  //通过props传递函数进行回调
  export default {
    name: "child1",
    props: ['click1', 'mainVaule1'],
    data() {
      return {
        c1: 1
      }
    },
    methods: {
      child1click() {
        this.click1(this.c1)
      },
    }
  }
</script>

<style scoped>
  div{
    background: red;
  }
</style>
