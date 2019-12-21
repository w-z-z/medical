/*
 * @Description: 路由装载配置
 * @Author: chenwei
 * @Date: 2019-06-04 18:38:00
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 13:49:10
 */



import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import routers from './allRouter'
Vue.use(Router)
routers
routers.unshift({ path: '/', redirect: '/login' })
routers.unshift({ path: '*', redirect: '/NotFound' })
store.dispatch('changeRouter',routers)
export default new Router({
  mode: 'hash',
  routes: routers
})
