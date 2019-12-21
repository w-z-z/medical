//静态路由未登录可访问的
export default [
  {
    id: 123456,
    title:"登录"
    name:"/login",
    path: '/login/index',
  },
  {
    id: 123456,
    title:"注册"
    name:"/register",
    path: '/register/index',
    child:[
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
    title:"忘记密码"
    name:"/forgetPsd",
    path: '/forgetPsd/index',
    
  },
  {
    id: 123456,
    title:"404"
    name:"/forgetPsd",
    path: '/errorPage/NotFound',
  }
]
