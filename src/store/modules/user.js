const state = {
  userInfo: {
    // name:"",
    // type:"",//1 个人企业
    // routers:[]
  },
  token:0//动态路由标识
}
const mutations = {
  INCREMENT_CHANGEUSERINFO (state,data) {
    state.userInfo=data
  },
  // INCREMENT_CHANGERUER (state,data) {
  //   state.router=data
  // },
  INCREMENT_TOKEN (state,data) {
    state.token=data
  },
}
const actions = {
  changeUserInfo ({ commit },data) {
    commit('INCREMENT_CHANGEUSERINFO',data)
  },
  changeToken ({ commit },data) {
    commit('INCREMENT_TOKEN',data)
  },
}
export default {
  state,
  mutations,
  actions
}
