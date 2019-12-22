//静态路由未登录可访问的
export default [
 
  {
    id: 123456,
    title:"登录",
    name:"login",
    meta:{
      title:"登录",
      isStatic: true
    },
    path: '/login',
    component:  () => import('@/views/login/index.vue'),
  },
  // {
  //   id: 123456,
  //   title:"登录",
  //   name:"login",
  //   meta:{
  //     title:"登录",
  //   },
  //   path: '/dd',
  //   component:  () => import('@/views/login/index.vue'),
  // },
  {
    id: 123456,
    title:"注册",
    meta:{
      title:"注册",
      isStatic: true

    },
    name:"register",
    path: '/register',
    component:  () => import('@/views/register/index.vue'),
    children:[
      // {
      //   id: 123456,
      //   title:"个人注册"
      //   name:"/personRegister",
      //   path: '/register/index',
        
      // },
      // {
      //   id: 123456,
      //   title:"企业注册"
      //   name:"/personRegister",
      //   path: '/register/index',
        
      // },
    ]
  },
  {
    id: 123456,
    title:"忘记密码",
    name:"forgetPsd",
    meta:{
      title:"忘记密码",
      isStatic: true

    },
    path: '/forgetPsd',
    component: () => import('@/views/forgetPsd/index.vue'),
  },
  {
    id: 123456,
    title:"404",
    name:"NotFound",
    meta:{
      title:"404",
    },
    path: '/NotFound',
    component:  () => import('@/views/errorPage/NotFound.vue'),
  }
]
