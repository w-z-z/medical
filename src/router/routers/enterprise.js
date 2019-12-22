// //企业用户路由配置文件
/*
 * @Description: 分类路由
 * @Author: chenwei
 * @Date: 2019-06-06 10:19:06
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 14:15:30
 */
//个人用户路由
import template from '@/views/template/index.vue'
import layout from '@/layout/index.vue'

export default [
 {
  id: 123456,
    title:"布局",
    name:"layout",
    meta:{
      title:"",
      requireAuth:true
    },
    path: '/layout',
    component: layout,
    redirect:'/userCener',
  children:[{
    id: 123456,
    title:"会员中心",
    name:"userCener",
    path: '/userCener',
    component:  () => import('@/views/enterprise/index.vue'),
    redirect:'/userCener/setUserInfo',
    children:[
      {
        id: 123456,
        title:"设置个人",
        name:"setUserInfo",
        path: '/userCener/setUserInfo',
        component:  () => import('@/views/enterprise/setUserInfo/index.vue'),
        children:[
          
        ]
      },
      {
        id: 123456,
        title:"员工管理",
        name:"staff",
        path: '/userCener/staff',
        component:  () => import('@/views/enterprise/staff.vue'),
        children:[
          
        ]
      },
      {
        id: 123456,
        title:"消息中心",
        meta:{
          title:"消息中心",
        },
        name:"message",
        path: '/userCener/message',
        component:  template,
        redirect:'/userCener/messageList',
        children:[
          {
            id: 123456,
            title:"消息列表",
            meta:{
              title:"消息列表",
            },
            name:"messageList",
            path: '/userCener/messageList',
            component:  () => import('@/views/message/index.vue'),
            children:[
            ]
          },
          {
            id: 123456,
            title:"消息详情",
            meta:{
              title:"消息详情",
            },
            name:"messageDetail",
            path: '/userCener/messageDetail',
            component:  () => import('@/views/message/detail.vue'),
          },
        ]
      },
    ]
  },]

 },
  
]