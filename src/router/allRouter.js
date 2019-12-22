/*
 * @Description: 所有的路由配置
 * @Author: chenwei
 * @Date: 2019-06-06 10:17:12
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 14:14:15
 */

import personRouter from './routers/person'
import staticRouter from './staticRouter'
import enterpriseRouter from './routers/enterprise'
import store from '@/store/index'

let all=staticRouter
// 个人
// console.log(store.state.user.userInfo.type)

// if(store.state.user.userInfo.type==1){
//   all= staticRouter.concat(personRouter)
//   //企业
// }else {
//   all= staticRouter.concat(enterpriseRouter)
// }
//需要处理路由的方法
// let routes = []
// const initRouter = function (routerobj) {
//   routerobj.forEach(element => {
//     let obj = {
//       name: element.name,
//       path: element.path,
//       meta:{
//         title: element.title,
//         id:element.title,
//       }
//       component:() => import('@/views/' + element.path + '.vue'),
//       // component:layout,
//     }     
//     if (all[k].children && all[k].children.length>=1) {
//       initRouter(...all[k].children)
//     }
//     routes.push(obj)
//   });
// }
// initRouter(all)
export default all
