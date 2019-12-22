/*
 * @Description: 路由装载配置
 * @Author: chenwei
 * @Date: 2019-06-04 18:38:00
 * @LastEditors  : zhangyukele
 * @LastEditTime : 2019-12-22 14:49:02
 */



import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store';
import routers from './allRouter'
Vue.use(Router)
/*在跳转之前执行*/

routers.unshift({ path: '/', redirect: '/login' })
// routers.unshift({ path: '*', component: '/login'})

// routers.unshift({ path: '*', redirect: '/NotFound' ,hidden: true})
// store.dispatch('changeRouter',routers)
let router=new Router({
  mode: 'hash',
  routes: routers
})

export default router
