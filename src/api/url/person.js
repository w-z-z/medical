/*
 * @Description: 个人模块接口
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 17:58:37
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-06 17:35:26
 */


export default [
  //个人中心模块

  //1 编辑联系人资料 
  {
    name: 'UpdateContactInfo',
    url: '/v1/company/UpdateContactInfo'
  },

  //2 修改手机号，发送新手机号验证码2
  {
    name: 'CheckCodeByOldMobile',
    url: '/v1/person/CheckCodeByOldMobile'
  },
  // 3  查询用户详情
  {
    name: 'GetPersonUserInfo',
    url: '/v1/person/GetPersonUserInfo',
    methods: "get"
  },
  //4  修改手机号，发送新手机号验证码3
  {
    name: 'SendCodeByNewMobile',
    url: '/v1/person/SendCodeByNewMobile'
  },
  // 5  修改手机号，发送原手机号验证码1
  {
    name: 'SendCodeByOldMobile',
    url: '/v1/person/SendCodeByOldMobile'
  },
  // 6   修改手机号4
  {
    name: 'UpdateMobile',
    url: '/v1/person/UpdateMobile'
  },
  //7   修改密码
  {
    name: 'UpdatePassword',
    url: '/v1/person/UpdatePassword'
  },
  //8   编辑个人资料
  {
    name: 'UpdatePersonUser',
    url: '/v1/person/UpdatePersonUser'
  },
  // 9  上传头像
  {
    name: 'UploadHeadImg',
    url: "/v1/person/UploadHeadImg"
  },
  // 10 个人用户上传图片
  {
    name: 'personUploadImg',
    url: "/v1/upload/UploadImg"
  },

  // 忘记密码模块

  // 11 个人用户验证忘记密码短信验证码3
  {
    name: 'CheckForgetCode',
    url: '/v1/forget/CheckForgetCode',
  },
  // 12 个人用户检查手机号是否注册1
  {
    name: 'CheckMobileRegistered',
    url: '/v1/forget/CheckMobileRegistered'
  },
  //13 个人用户重置密码4
  {
    name: 'ResetPassword',
    url: '/v1/forget/ResetPassword'
  },
  // 14 个人用户发送忘记密码短信验证码2
  {
    name: 'SendForgetCode',
    url: '/v1/forget/SendForgetCode'
  },

  // 登录模块
  // 15 个人用户密码登录
  {
    name: 'personLogin',
    url: '/v1/login/PersonPasswordLogin'
  },
  // 16 个人用户短信验证码登录
  {
    name: 'PersonSmsCodeLogin',
    url: '/v1/login/PersonSmsCodeLogin'
  },
  //17  个人用户发送登录短信验证码
  {
    name: 'SendLoginCode',
    url: '/v1/login/SendLoginCode'
  },
  //退出登录
  {
    name: 'personLoginOut',
    url: '/v1/person/Logout'
  },
  // 注册模块
  // 18 个人用户验证注册短信验证码
  {
    name: 'CheckRegisterCode',
    url: '/v1/register/CheckRegisterCode'
  },
  // 19个人用户注册
  {
    name: 'PersonRegister',
    url: '/v1/register/PersonRegister'
  },
  //20  个人用户发送注册短信验证码
  {
    name: 'SendRegisterCode',
    url: '/v1/register/SendRegisterCode'
  },
  // 检查报告模块
  // 21 查询基因检测报告统计
  {
    name: 'GetCheckReportCount',
    url: '/v1/health/GetCheckReportCount',
    methods: "get"
  },
  // 22 查询基因检测报告详情
  {
    name: 'GetCheckReportDetail',
    url: '/v1/health/GetCheckReportDetail',
    methods: "get"
  },
  // 23 查询基因检测报告列表
  {
    name: 'GetCheckReportList',
    url: '/v1/health/GetCheckReportList',
    methods: "get"
  },
  // 体检报告模块
  // 24  删除体检报告
  {
    name: 'DeletePhysicalExaminationReport',
    url: '/v1/health/DeletePhysicalExaminationReport'
  },
  // 25  查询体检报告列表
  {
    name: 'GetPhysicalExaminationReportList',
    url: '/v1/health/GetPhysicalExaminationReportList',
    methods: "get"
  },
  // 26  上传体检报告
  {
    name: 'UploadPhysicalExaminationReport',
    url: '/v1/health/UploadPhysicalExaminationReport'
  },
  //体检报告统计列表
  {
    name: 'GetPhysicalExaminationCount',
    url: "/v1/health/GetPhysicalExaminationCount",
    methods: "get"
  },
  // 知情同意书
  // 27 查询知情同意书列表
  {
    name: 'GetConsentFormList',
    url: '/v1/health/GetConsentFormList',
    methods: "get"
  },
  // 健康档案模块
  // 28 创建健康档案
  {
    name: 'CreateHealthRecord',
    url: '/v1/health/CreateHealthRecord'
  },
  // 29 查询健康档案详情
  {
    name: 'GetHealthRecordDetail',
    url: '/v1/health/GetHealthRecordDetail',
    methods: "get"
  },
  // 30 查询健康档案列表
  {
    name: 'GetHealthRecordList',
    url: '/v1/health/GetHealthRecordList',
    methods: "get"
  },
  // 30 编辑健康档案
  {
    name: 'UpdateHealthRecord',
    url: '/v1/health/UpdateHealthRecord',
  },
  // 31 查询病例列表
  {
    name: 'GetIllnessItemList',
    url: '​/v1​/health​/GetIllnessItemList',
    methods: "get"
  },
  //获取token
  {
    name: 'GetQiNiuUploadToken',
    url: "/v1/upload/GetQiNiuUploadToken",
  },
  // 33 个人用户上传图片
  {
    name: 'UploadImg',
    url: '​​/v1​/upload​/UploadImg'
  },

  // 通知模块
  // 34 查询通知列表
  {
    name: 'GetNoticeList',
    url: '/v1/notice/GetNoticeList',
    methods: 'get'
  },

  // 35 查询通知详情
  {
    name: 'GetNoticeDetail',
    url: '/v1/notice/GetNoticeDetail',
    methods: 'get'
  },

  // 产品模块
  // 36 查询产品详情
  {
    name: 'GetProductDetail',
    url: "/v1/product/GetProductDetail",
    methods: 'get'
  },
  // 37 查询产品列表
  {
    name: 'GetProductList',
    url: '/v1/product/GetProductList',
    methods: 'get'
  },

  // 网站设置模块
  // 38 关于我们
  {
    name: 'About',
    url: '/v1/website/About',
    methods: 'get'
  },

  // 39 联系我们
  {
    name: 'Contact',
    url: '/v1/website/Contact',
    methods: 'get'
  },
  // 40 服务条款
  {
    name: 'DataProtectionProtocol',
    url: '/v1/website/DataProtectionProtocol',
    methods: 'get'
  },
  {
    name: 'PrivacyStatement',
    url: '/v1/website/PrivacyStatement',
    methods: 'get'
  },
  {
    name: 'TermsService',
    url: '/v1/website/TermsService',
    methods: 'get'
  },
]