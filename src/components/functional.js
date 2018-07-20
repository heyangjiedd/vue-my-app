import rendertest from './rendertest.vue'

export default {
  functional: true,
  render(createElement, context) {
    return createElement(
      rendertest,
      {
        props:{
          level:context.props.level,
        },
      },
      '54543535',
      context.data,

    )
  },
  props:{
    level:{
      type:Number,
      required:true
    }
  }
}
