export default {
  render(createElement){
    //this.$slots.default 子组件中的阵列
    return createElement('h'+this.level,this.$slots.default)
  },
  props:{
    level:{
      type:Number,
      required:true
    }
  }

}
