<template>
  <div>
    <countAdd title="1234"></countAdd>
    <count-add2></count-add2>
    <render :level="3">
        <p>Vue 组件</p>
    </render>
    <render1 :level="4">
      <p>js 组件</p>
    </render1>
    <componnet :hhh="432442424"></componnet>
    <SmartList :level="5">
      <p>442442443</p>
    </SmartList>
  </div>
</template>
<style scoped lang="less">
</style>

<script>
  import countAdd from '../components/count';
  import render from '../components/rendertest.vue';
  import componnet from '../components/componnet.vue';
  export default {
    components: {
      countAdd,
      render,
      componnet,
    }
  }
</script>
