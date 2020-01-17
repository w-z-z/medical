/*
 * @Description: 企业用户路由配置文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-21 22:18:55
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-08 10:16:36
 */
import template from '@/views/template/index.vue'
import layout from '@/layout/index.vue'
import insideLayout from '@/components/insideLayout/index.vue'

export default [{
    id: 123456,
    title: "布局",
    name: "layout",
    meta: {
      title: "",
      requireAuth: true
    },
    path: '/layout',
    component: layout,
    redirect: '/userCener',
    children: [{
      id: 123456,
      title: "会员中心",
      name: "userCener",
      path: '/userCener',
      component: insideLayout,
      redirect: '/userCener/userCenterHome',
      children: [{
          id: 123456,
          title: "首页",
          name: "userCenterHome",
          path: '/userCener/userCenterHome',
          component: () => import('@/views/enterprise/index.vue'),
          children: [

          ]
        }, {
          id: 123456,
          title: "设置个人",
          name: "setUserInfo",
          path: '/userCener/setUserInfo',
          component: () => import('@/views/enterprise/setUserInfo/index.vue'),
          children: [

          ]
        },
        {
          id: 123456,
          title: "员工管理",
          name: "staff",
          path: '/userCener/staff',
          component: () => import('@/views/enterprise/staff.vue'),
          children: []
        },
        {
          id: 123456,
          title: "消息中心",
          meta: {
            title: "消息中心",
          },
          name: "message",
          path: '/userCener/message',
          component: template,
          redirect: '/userCener/messageList',
          children: [{
              id: 123456,
              title: "消息列表",
              meta: {
                title: "消息列表",
              },
              name: "messageList",
              path: '/userCener/messageList',
              component: () => import('@/views/message/index.vue'),
              children: []
            },
            {
              id: 123456,
              title: "消息详情",
              meta: {
                title: "消息详情",
              },
              name: "messageDetail",
              path: '/userCener/messageDetail/:msgId',
              component: () => import('@/views/message/detail.vue'),
            },
          ]
        },
      ]
    }, ]

  },

]