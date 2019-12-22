import router from '../../router/index'

const state = {
  userInfo: {
    // name:"",
    // type:"",//1 个人企业
    // routers:[]
  },
  routerList: []
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
  ADD_ROUTER(state,addRouter){
    if(!router.hasAddRouter){
      console.log(state.userInfo.routers,11);
      
      router.addRoutes(addRouter)
      router.hasAddRouter = true;
      console.log(11111,router);
      if(typeof next === 'function'){
        console.log('222');
        // next()
      }
      
      
    }
  }
}
const actions = {
  changeUserInfo ({ commit },data) {
    commit('INCREMENT_CHANGEUSERINFO',data)
  },
  addRouters({ commit },data){
    commit('ADD_ROUTER',data)
  }
}
export default {
  state,
  mutations,
  actions
}
