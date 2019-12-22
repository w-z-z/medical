const state = {
  userInfo: {
    // name:"",
    // type:"",//1 个人企业
    // routers:[]
  },
}
const mutations = {
  INCREMENT_CHANGEUSERINFO (state,data) {
    state.userInfo=data
  },
  INCREMENT_CHANGERUER (state,data) {
    state.router=data
  },
}
const actions = {
  changeUserInfo ({ commit },data) {
    commit('INCREMENT_CHANGEUSERINFO',data)
  },
}
export default {
  state,
  mutations,
  actions
}
