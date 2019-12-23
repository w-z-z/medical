/*
 * @Description: user模块的数据
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 17:19:55
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 17:38:38
 */
import router from '../../router/index'

const state = {
  userInfo: {},
  currentRouterType: 0 //0表示不用显示1表示显示
}
const mutations = {
  INCREMENT_CHANGEUSERINFO(state, data) {
    state.userInfo = data
  },
  //添加路由
  ADD_ROUTER(state, addRouter) {
    if (!router.hasAddRouter) {
      router.addRoutes(addRouter)
      router.hasAddRouter = true;
    }
  },
  CURRENT_ROUTERTYPE(state, data) {
    state.currentRouterType = data
  }
}
const actions = {
  changeUserInfo({
    commit
  }, data) {
    commit('INCREMENT_CHANGEUSERINFO', data)
  },
  addRouters({
    commit
  }, data) {
    commit('ADD_ROUTER', data)
  },
  changeRouterType({
    commit
  }, data) {
    commit('CURRENT_ROUTERTYPE', data)
  },

}
export default {
  state,
  mutations,
  actions
}