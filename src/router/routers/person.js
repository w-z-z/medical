/*
 * @Description: 分类路由
 * @Author: chenwei
 * @Date: 2019-06-06 10:19:06
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 14:15:30
 */
//个人用户路由

export default {
  'persponIndex': {
    id: 123456,
    path: 'person/index', child: [
     
    ]
    // redirect:() => import('@/views/person/index.vue'),
  },
  'setUserInfo': {
    id: 123456,
    path: 'person/setUserInfo/index', child: [
     
    ]
  },
  'MedicalReports': {
    id: 123456,
    path: 'person/MedicalReports/index', child: [
     
    ]
  },
}
