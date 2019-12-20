/*
 * @Description: 分类路由
 * @Author: chenwei
 * @Date: 2019-06-06 10:19:06
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 14:15:30
 */

// key：路由的 name   路由的path  为 /name
// val：路由的文件路径 从 views 开始写
// 然后统一在all.js里面引入该文件
export default {

  'home_order': {
    id: 123456,
    path: 'home/order/order',
    child: [

    ]
  },
  'home': {
    id: 123456,
    path: 'home/demo',
    child: [

    ]
  }
}
