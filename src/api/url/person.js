/*
 * @Description: 个人模块接口
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 17:58:37
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 18:56:42
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
    method: "get"
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
    url: '/v1​/register​/SendRegisterCode'
  }
]