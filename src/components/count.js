/**
 * Created by heyangjie on 2018/5/10.
 */

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    compiledMarkdown() {
      return '<strong>' + this.input + '</strong>'
    }
  },
  data: function () {
    return {
      input: 'hello',
      answer: {
        a:3412414
      }
    }
  },
  props:['title'],
  watch: {
    input: function (value) {
      this.answer.b = value;
      this.$nextTick(function () {
          debugger
      })
    }
  },
  methods: {
    change() {
      this.$store.commit('increment')
    },
    update(e) {
      this.input = e.target.value;
    }
  },
  template: '<div id="editor">' +
  '<p>{{answer.a}}</p>' +
  '<p>{{answer.b}}</p>' +
  '<textarea :value="input" @input="update"></textarea>' +
  '<div v-html="compiledMarkdown"></div>' +
  '<div>{{title}}</div>' +
  '</div>'
  //'<button v-on:click="change">点击{{count}}</button>'
}

