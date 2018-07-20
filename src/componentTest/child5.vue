<template>
  <div>
    <p>{{message}}</p>
    <p>{{message2}}</p>
  </div>
</template>

<script>
  export default {
    name: "child5",
    computed:{
      message(){
        return this.$store.getters.getMessage
      },
      message2(){
        return this.$store.getters.getMessageById(2)
      }
    }
  }
</script>

<style scoped>

</style>
