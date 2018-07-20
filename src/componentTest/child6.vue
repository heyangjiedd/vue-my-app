<template>
  <div>
    <p @click="click">dispatch</p>
  </div>
</template>

<script>
  export default {
    name: "child6",
    methods:{
      click(){
        this.$store.dispatch('notify','dispatch')
      }
    }
  }
</script>

<style scoped>

</style>
