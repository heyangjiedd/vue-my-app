<template>
    <div>{{aaa}}</div>
</template>

<script>
    export default {
      name: "componnet",
      props:['hhh'],
      computed:{
        aaa() {
          return this.hhh * 3
        }
      }
    }
</script>

<style scoped>

</style>
