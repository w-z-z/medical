/*
 * @Description: 路由装载配置
 * @Author: chenwei
 * @Date: 2019-06-04 18:38:00
 * @LastEditors  : zhangyukele
 * @LastEditTime : 2019-12-22 18:22:56
 */



import Vue from 'vue'
import Router from 'vue-router'
import routers from './allRouter'
Vue.use(Router)
/*在跳转之前执行*/

routers.unshift({
  path: '/',
  redirect: '/login'
})
// routers.unshift({ path: '*', component: '/login'})

export const createRouter = () => new Router({
  mode: 'hash',
  routes: routers
})
const router = createRouter();



export default router