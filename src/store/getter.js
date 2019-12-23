/*
 * @Description: vuex的getter文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-20 23:56:20
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:25:45
 */
export default {
   userInfo: (state) => {
      return state.user.userInfo
   },
   getToken: (state) => {
      return state.user.token
   },
}