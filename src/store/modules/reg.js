/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-01-02 12:17:19
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-02 12:48:17
 */

import router from '../../router/index'
import {
    createRouter
} from "@/router/index";
import Vue from 'vue'
const state = {
    regData: {}
}
const mutations = {
    GET_REGDATA(state, data) {
        state.regData = data
    },

}
const actions = {
    regData({
        commit
    }, data) {
        commit('GET_REGDATA', data)
    },
}
export default {
    state,
    mutations,
    actions
}