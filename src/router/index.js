/*
 * @Description: 路由装载配置
 * @Author: chenwei
 * @Date: 2019-06-04 18:38:00
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:17:03
 */



import Vue from 'vue'
import Router from 'vue-router'
import routers from './allRouter'
import store from '../store'
import personRouter from '@/router/routers/person'
import enterpriseRouter from '@/router/routers/enterprise'
Vue.use(Router)
/*在跳转之前执行*/

routers.unshift({
  path: '/',
  redirect: '/userCener'
})
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export const createRouter = () => new Router({
  mode: 'hash',
  routes: routers
})
const router = createRouter();
//路由拦截
router.beforeEach((to, from, next) => {
  store.dispatch("changeRouterType", to.meta.hiddenFooter)
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = "用户中心"
  }
  //登录问题
  if (store.state.user.userInfo && store.state.user.userInfo.token) {
    // console.log("有userInfo")
    if (!router.hasAddRouter) {
      // console.log("拼接路由-----------跳转")
      let _type = store.state.user.type == 0 ? personRouter : enterpriseRouter
      _type.concat[{
        path: '*',
        redirect: '/NotFound'
      }]
      store.dispatch("addRouters", _type)
      next({
        ...to,
        replace: true
      })
    } else {
      // console.log("不拼接路由 -----------跳转")
      next()
    }
  } else {
    // console.log("无userInfo")
    if (to.meta.isStatic) {
      next()
    } else {
      if (to.name != 'login') {
        next({
          path: "/login",
          replace: true
        })
      }
    }

  }
})
export default router