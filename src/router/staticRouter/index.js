/*
 * @Description:  项目静态路由
 * @Version: 1.0.0
 * @Autor: ranli
 * @Date: 2019-12-22 17:19:55
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:20:10
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
          isStatic: true //是否是静态路由的标识
        },
        name: "register",
        path: '/register',
        component: () => import('@/views/register/index.vue'),
        children: []
      },
      {
        id: 123456,
        title: "忘记密码",
        name: "forgetPsd",
        meta: {
          title: "忘记密码",
          isStatic: true
        },
        path: '/forgetPsd',
        component: () => import('@/views/forgetPsd/index.vue'),
      },
      {
        id: 123456,
        title: "404",
        name: "NotFound",
        meta: {
          title: "404",
        },
        path: '/NotFound',
        component: () => import('@/views/errorPage/NotFound.vue'),
      }
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