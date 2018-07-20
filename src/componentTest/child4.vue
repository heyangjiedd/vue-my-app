<template>
  <div>
    <button @click="child4">click4</button>
  </div>
</template>

<script>
  export default {
    name: "child4",
    created(){
      this.Bus.$on('change',(value)=>{
          console.log(value)
      })
    },
    methods: {
      child4() {

      }
    }
  }
</script>

<style scoped>

</style>
