//企业用户路由配置文件
export default [
  {
    id: 123456,
    title:"会员中心"
    name:"/userCenter",
    path: 'enterprise/index',
    child:[
      {
        id: 123456,
        title:"员工管理"
        name:"/staff",
        path: '/enterprise/staff',
      },
      {
        id: 123456,
        title:"消息中心"
        name:"/message",
        path: '/enterprise/message/index',
        child:[
          {
            id: 123456,
            title:"消息详情"
            name:"/messagedetail",
            path: '/enterprise/message/detail',
          }
        ]
      }
  ]
  }
]
