import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import first from '@/components/first'
import second from '@/components/second'
import three from '@/components/three'
import four from '@/components/four'
import five from '@/components/five'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: home,
      //设置默认路由
      children: [
        {
          path: '', component: first, name: 'first',children: [
          {path: '', component: four, name: 'four'}
        ]
        },{
        path: '/first', component: first, name: 'first',
        children: [
          {path: '/first/four', component: four, name: 'four'},
          {path: '/first/five', component: five, name: 'five'}
          ]
      }, {
        path: '/second', component: second, name: 'second',
          children: [
            {path: '/first/four', component: four, name: 'four'},
            {path: '/first/five', component: five, name: 'five'}
          ]
      }, {
        path: '/three', component: three, name: 'three'
      },
    ]
    },
  ]
})
