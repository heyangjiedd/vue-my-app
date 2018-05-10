import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import login from '@/page/login'
import first from '@/page/first'
import second from '@/page/second'
import three from '@/page/three'
import four from '@/page/four'
import five from '@/page/five'
Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/login', component: login,},
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
            //设置默认路由
            {path: '', component: four, name: 'four'},
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
});
//路由守卫
router.beforeEach((to, from, next) => {
  if(to.path != '/login'&&(!localStorage['username']||!localStorage['password'])){
    next({ path: '/login' });
  }else{
    next();
  }

});
export default router
