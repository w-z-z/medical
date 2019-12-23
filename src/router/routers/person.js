/*
 * @Description: 个人用户路由
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 17:19:55
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:27:18
 */

import template from '@/views/template/index.vue'
import layout from '@/layout/index.vue'
export default [{
    id: 123456,
    title: "布局",
    name: "layout",
    meta: {
      requireAuth: true,
      title: "",
    },
    path: '/layout',
    component: layout,
    redirect: '/userCener',
    children: [{
      id: 123456,
      title: "会员中心",
      name: "userCener",
      meta: {
        title: "会员中心",
      },
      path: '/userCener',
      component: () => import('@/views/person/index.vue'),
      redirect: '/userCener/setUserInfo',
      children: [{
          id: 123456,
          title: "设置个人",
          meta: {
            title: "设置个人",
          },
          name: "setUserInfo",
          path: '/userCener/setUserInfo',
          component: () => import('@/views/person/setUserInfo/index.vue'),
          children: [

          ]
        },
        {
          id: 123456,
          title: "基因检测报告",
          meta: {
            title: "基因检测报告",
          },
          name: "GeneTestReport",
          path: '/userCener/GeneTestReport',
          component: () => import('@/views/person/GeneTestReport/index.vue'),
          children: []
        },
        {
          id: 123456,
          title: "知情同意书",
          meta: {
            title: "知情同意书",
          },
          name: "InformedConsent",
          path: '/userCener/InformedConsent',
          component: () => import('@/views/person/InformedConsent/index.vue'),
          children: []
        },
        {
          id: 123456,
          title: "健康档案",
          meta: {
            title: "健康档案",
          },
          name: "healthRecord",
          path: '/userCener/healthRecord',
          component: template,
          redirect: '/userCener/healthRecord/addRecord',
          children: [{
              id: 123456,
              title: "添加健康档案",
              meta: {
                title: "添加健康档案",
              },
              name: "addRecord",
              path: '/userCener/healthRecord/addRecord',
              component: () => import('@/views/person/healthRecord/addRecord.vue'),
              children: []
            },
            {
              id: 123456,
              title: "编辑健康档案",
              meta: {
                title: "编辑健康档案",
              },
              name: "editRecord",
              path: '/userCener/healthRecord/editRecord',
              component: () => import('@/views/person/healthRecord/editRecord.vue'),
            },
          ]
        },
        {
          id: 123456,
          title: "体检报告",
          meta: {
            title: "体检报告",
          },
          name: "MedicalReports",
          path: '/userCener/MedicalReports',
          component: () => import('@/views/person/MedicalReports/index.vue'),
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
              path: '/userCener/messageDetail',
              component: () => import('@/views/message/detail.vue'),
            },
          ]
        },

      ]
    }, ]
  },

]