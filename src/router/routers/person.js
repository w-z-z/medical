/*
 * @Description: 个人用户路由
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 17:19:55
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 19:22:42
 */

import template from '@/views/template/index.vue'
import layout from '@/layout/index.vue'
import insideLayout from '@/components/insideLayout/index.vue'

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
      title: "个人中心",
      name: "userCener",
      meta: {
        title: "个人中心",
      },
      path: '/userCener',
      component: insideLayout,
      redirect: '/userCener/userCenerHome',
      children: [{
          id: 123456,
          title: "",
          meta: {
            title: "",
          },
          name: "userCenerHome",
          path: '/userCener/userCenerHome',
          component: () => import('@/views/person/index.vue'),
        },
        {
          id: 123456,
          title: "设置信息",
          meta: {
            title: "设置信息",
          },
          name: "setUserInfo",
          path: '/userCener/setUserInfo',
          component: () => import('@/views/person/setUserInfo/index.vue'),
        },
        {
          id: 123456,
          title: "修改密码",
          meta: {
            title: "修改密码",
          },
          name: "mobileModify",
          path: '/userCener/mobileModify',
          component: () => import('@/views/person/setUserInfo/model/mobileModify.vue'),
        },
        {
          id: 123456,
          title: "检测报告",
          meta: {
            title: "检测报告",
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
          redirect: '/userCener/healthRecord/healthRecordList',
          children: [{
              id: 123456,
              title: "",
              meta: {
                title: "",
              },
              name: "healthRecordList",
              path: '/userCener/healthRecord/healthRecordList',
              component: () => import('@/views/person/healthRecord/index.vue'),
              children: []
            },
            {
              id: 123456,
              title: "新增健康档案",
              meta: {
                title: "新增健康档案",
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
              path: '/userCener/healthRecord/editRecord/:id',
              component: () => import('@/views/person/healthRecord/addRecord.vue'),
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
              title: "",
              meta: {
                title: "",
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
              path: '/userCener/messageDetail/:id',
              component: () => import('@/views/message/detail.vue'),
            },
          ]
        },

      ]
    }, ]
  },

]