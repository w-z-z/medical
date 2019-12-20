/*
 * @Description: 所有的路由配置
 * @Author: chenwei
 * @Date: 2019-06-06 10:17:12
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 14:14:15
 */

import home from './routers/home'

let all = Object.assign(
  home
)

let routes = []
const initRouter = function (routerobj) {
  for (let k in routerobj) {
    let obj = {
      name: k,
      path: '/' + k,
      component: () => import('@/views/' + all[k].path + '.vue')
    }
    console.log(all[k].path)
    if (all[k].child && all[k].child.length) {
      initRouter(...all[k].child)
    }
    routes.push(obj)
  }
}
initRouter(all)
export default routes
