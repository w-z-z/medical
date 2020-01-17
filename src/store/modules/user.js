/*
 * @Description: user模块的数据
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 17:19:55
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:13:50
 */
import router from '../../router/index'
import {
  createRouter
} from "@/router/index";
import Vue from 'vue'
const state = {
  userInfo: {},
  type: 0, //用户路由类型 个人还是商业
  currentRouterType: 0 //是否显示页脚的判断
}
const mutations = {
  INCREMENT_CHANGEUSERINFO(state, data) {
    // state.userInfo = {
    //   ...data
    // }
    state.userInfo = data
  },
  //添加路由
  ADD_ROUTER(state, addRouter) {
    if (!router.hasAddRouter) {
      router.addRoutes(addRouter)
      router.hasAddRouter = true;
    }
  },
  //是否显示页脚
  CURRENT_ROUTERTYPE(state, data) {
    state.currentRouterType = data
  },
  // USERROUTERTYPE(state, data) {
  //   state.type = data
  // }
}
const actions = {
  changeUserInfo({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      commit('INCREMENT_CHANGEUSERINFO', data)
      resolve()
    })
  },
  addRouters({
    commit
  }, data) {
    commit('ADD_ROUTER', data)
  },
  // //用户路由Type
  // userRouterType({
  //   commit
  // }, data) {
  //   commit('CURRENT_ROUTERTYPE', data)
  // },
  changeRouterType({
    commit
  }, data) {
    commit('CURRENT_ROUTERTYPE', data)
  },
  //清空用户数据
  clearAllUserData({
    commit
  }, data) {
    //清楚用户数据
    commit('INCREMENT_CHANGEUSERINFO', null)
    //跟换路由
    router.hasAddRouter = false
    // commit('ADD_ROUTER', null)
    //重新匹配路由
    router.matcher = createRouter().matcher;
    Vue.prototype.$showMsg("登录失效")
    //回到登录页
    router.push({
      name: "login"
    });
  }
}
export default {
  state,
  mutations,
  actions
}