<template>
  <div>
    <button @click="child1click">click me ! child2</button>
    <p>子组件{{mainVaule2}}</p>
  </div>
</template>

<script>
  //通过$on和$emit传递
  export default {
    name: "child2",
    props: ['click2', 'mainVaule2'],
    data() {
      return {
        c2: 3
      }
    },
    methods: {
      child1click() {
        this.$emit('upup',this.c2)
      }
    }
  }
</script>

<style scoped>
  div{
    background: gold;
  }
</style>
