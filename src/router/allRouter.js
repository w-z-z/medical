/*
 * @Description: 所有的路由配置
 * @Author: chenwei
 * @Date: 2019-06-06 10:17:12
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 14:14:15
 */

import person from './routers/person'
import staticRouter from './staticRouter'
import enterprise from './routers/enterprise'

import layout from '@/layout/index.vue'
import template from '@/views/template/index.vue'


let all
let type=2
//个人
// if(type==1){
//   all= Object.assign(
//     staticRouter,person
//   )
//   //企业
// }else{
//   all= Object.assign(
//     staticRouter,enterprise
//   )
// }
let routes = []
const initRouter = function (routerobj) {
  routerobj.forEach(element => {
    let obj = {
      name: element.name,
      path: element.path,
      component:() => import('@/views/' + element.path + '.vue'),
      // component:layout,
    }     
    if (all[k].child && all[k].child.length>=1) {
      initRouter(...all[k].child)
    }
    routes.push(obj)
  });
}
initRouter(all)
console.log(routes)
export default routes
