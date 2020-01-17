/*
 * @Description: 公共接口
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 18:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-26 13:13:51
 */
export default [
  //查询当前时间
  {
    name: 'GetNowTime',
    url: '/v1/util/GetNowTime',
    methods: "get"
  },
  //测试接口
  {
    name: 'testTableData',
    url: '/v1/util/GetPageList',
    methods: "get"
  },
  //测试接口
  {
    name: 'GetList',
    url: '/v1/util/GetList',
    methods: "get"
  },
]