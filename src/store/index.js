import Vue from 'vue'
import Vuex from 'vuex'
// 数据持久化插件
import VuexPersistence from 'vuex-persist'

import modules from './modules'
import getters from './getter.js'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  modules,getters,
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== 'production'
})
