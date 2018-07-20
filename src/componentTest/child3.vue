<template>
  <div>
    <button @click="child3">click3</button>
  </div>
</template>

<script>
  export default {
    name: "child3",
    methods: {
      child3() {
        this.Bus.$emit('change','rwqerq')
      }
    }
  }
</script>

<style scoped>

</style>
