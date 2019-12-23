/*
 * @Description: 所有的路由配置
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-20 21:25:48
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:20:59
 */
import personRouter from './routers/person'
import staticRouter from './staticRouter'
import enterpriseRouter from './routers/enterprise'
let all = staticRouter
//路由拼接
// let routes = []
// const initRouter = function (routerobj) {
//   routerobj.forEach(element => {
//     let obj = {
//       name: element.name,
//       path: element.path,
//       component:() => import('@/views/' + element.path + '.vue'),
//     }     
//     if (all[k].children && all[k].children.length>=1) {
//       initRouter(...all[k].children)
//     }
//     routes.push(obj)
//   });
// }
// initRouter(all)
export default all