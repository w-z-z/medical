/*
 * @Description:  项目静态路由
 * @Version: 1.0.0
 * @Autor: ranli
 * @Date: 2019-12-22 17:19:55
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 19:04:09
 */
import layout from '@/layout/index.vue'
export default [{
    id: 123456,
    title: "布局",
    name: "layoutStatic",
    meta: {
      title: "",
      requireAuth: true
    },
    path: '/layoutStatic',
    component: layout,
    redirect: '/register',
    children: [{
        id: 123456,
        title: "注册",
        meta: {
          title: "注册",
          hiddenFooter: true, //是否隐藏页脚
          isStatic: true //是否是静态路由的标识
        },
        name: "register",
        path: '/register',
        redirect: '/register/personReg',
        component: () => import('@/views/register/index.vue'),
        children: [
          // {
          //   name: 'registerChoseReg',
          //   path: 'register/choseReg',
          //   meta: {
          //     title: "注册类型选择",
          //     hiddenFooter: true,
          //     isStatic: true
          //   },
          //   component: () => import('@/views/register/model/choseReg.vue')
          // },
          {
            name: 'personReg',
            meta: {
              title: "个人注册",
              hiddenFooter: true,
              isStatic: true
            },
            path: '/register/person',
            component: () => import('@/views/register/model/person.vue')
          },
          {
            name: 'companyReg',
            meta: {
              title: "企业注册",
              hiddenFooter: true,
              isStatic: true
            },
            path: '/register/company',
            component: () => import('@/views/register/model/company.vue')
          }
        ]
      },
      {
        id: 123456,
        title: "忘记密码",
        name: "forgetPsd",
        meta: {
          title: "忘记密码",
          isStatic: true,
          hiddenFooter: true,
        },
        path: '/forgetPsd',
        component: () => import('@/views/forgetPsd/index.vue')
      },
      {
        id: 123456,
        title: "404",
        name: "NotFound",
        meta: {
          title: "404",
          isStatic: true
        },
        path: '/NotFound',
        component: () => import('@/views/errorPage/NotFound.vue'),
      },
      {
        id: 123456,
        title: "service",
        name: "service",
        meta: {
          title: "服务条款",
          isStatic: true
        },
        path: '/service',
        component: () => import('@/views/other/service'),
      },
      {
        id: 123456,
        title: "aboutUs",
        name: "aboutUs",
        meta: {
          title: "关于我们",
          isStatic: true,
        },
        path: '/aboutUs',
        component: () => import('@/views/other/aboutUs'),
      },
      {
        id: 123456,
        title: "contactUs",
        name: "contactUs",
        meta: {
          title: "联系我们",
          isStatic: true,

        },
        path: '/contactUs',
        component: () => import('@/views/other/contactUs'),
      },
      {
        id: 123456,
        title: "dataProtocaol",
        name: "dataProtocaol",
        meta: {
          title: "数据保护协议",
          isStatic: true,

        },
        path: '/dataProtocol',
        component: () => import('@/views/other/dataProtocol'),
      },
      {
        id: 123456,
        title: "privacyStatement",
        name: "privacyStatement",
        meta: {
          title: "隐私声明",
          isStatic: true,

        },
        path: '/privacyStatement',
        component: () => import('@/views/other/privacyStatement'),
      },
      {
        id: 123456,
        title: "产品详情",
        meta: {
          title: "产品详情",
          isStatic: true,
        },
        name: "productDetail",
        path: '/productDetail/:proId',
        component: () => import('@/views/product/productDetail.vue'),
        children: []
      },
    ]
  },
  {
    id: 123456,
    title: "登录",
    name: "login",
    meta: {
      title: "登录",
      isStatic: true
    },
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
]