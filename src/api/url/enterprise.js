/*
 * @Description: 企业模块接口
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 17:58:37
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-24 14:28:08
 */


export default [

  //1  修改手机号，验证原手机号验证码2
  {
    name: 'CheckCodeByOldMobile',
    url: '/v1/company/CheckCodeByOldMobile'
  },
  //2 查询企业用户详情
  {
    name: 'GetCompanyUserInfo',
    url: '/v1/company/GetCompanyUserInfo',
    method: "get"
  },
  //3 修改手机号，发送新手机号验证码3
  {
    name: 'SendCodeByNewMobile',
    url: '/v1/company/SendCodeByNewMobile'
  },
  //4  修改手机号， 发送原手机号验证码1
  {
    name: 'SendCodeByOldMobile',
    url: '/v1/company/SendCodeByOldMobile'
  },

  //6 编辑企业资料
  {
    name: 'UpdateCompanyInfo',
    url: '/v1​/company​/UpdateCompanyInfo'
  },
  // 7修改手机号4
  {
    name: 'UpdateMobile',
    url: '/v1/company/UpdateMobile'
  },
  //8 修改密码
  {
    name: 'UpdatePassword',
    url: '/v1/company/UpdatePassword'
  },
  // 9  上传企业头像
  {
    name: 'UploadCompanyHeadImg',
    url: '/v1/company/UploadCompanyHeadImg'
  },
  //10 上传联系人头像
  {
    name: 'UploadContactHeadImg',
    url: "/v1/company/UploadContactHeadImg"
  },



  //11 企业用户上传图片
  {
    name: 'companyUploadImg',
    url: "/v1/company_upload/UploadImg"
  },

  // 忘记密码模块


  //12 企业用户验证忘记密码短信验证码3
  {
    name: 'CheckCompanyForgetCode',
    url: '/v1/forget/CheckCompanyForgetCode'
  },

  //13企业用户检查手机号是否注册1
  {
    name: 'CheckCompanyMobileRegistered',
    url: '/v1/forget/CheckCompanyMobileRegistered'
  },
  //14 /企业用户重置密码4
  {
    name: 'ResetCompanyPassword',
    url: '/v1/forget/ResetCompanyPassword'
  },
  // 15 企业用户发送忘记密码短信验证码2
  {
    name: 'SendCompanyForgetCode',
    url: '/v1/forget/SendCompanyForgetCode'
  },



  // 登录模块
  //   16 企业登录
  {
    name: 'companyLogin',
    url: '/v1/login/CompanyPasswordLogin'
  },
  // 17  企业用户短信验证码登录
  {
    name: 'CompanySmsCodeLogin',
    url: '/v1/login/CompanySmsCodeLogin'
  },
  // 18  企业用户发送登录短信验证码
  {
    name: 'SendCompanyLoginCode',
    url: '​/v1/login/SendCompanyLoginCode'
  },





  // 注册模块



  // 19企业用户注册
  {
    name: 'CompanyRegister',
    url: '/v1/register/CompanyRegister'
  },
  // 20企业用户发送注册短信验证码
  {
    name: 'SendCompanyRegisterCode',
    url: '/v1/register/SendCompanyRegisterCode'
  },
]