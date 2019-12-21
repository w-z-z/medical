const state = {
  userInfo: {
    name:"真真棒",
    type:'1'//1 个人企业
  },
  router:[]
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
  changeRouter ({ commit },data) {
    commit('INCREMENT_CHANGERUER',data)
  },
}

export default {
  state,
  mutations,
  actions
}
