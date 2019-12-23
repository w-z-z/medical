/*
 * @Description: 表单验证方法
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-20 21:25:48
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:29:15
 */
/**
 * 表单验证
 */

class Validate {
  constructor() {
    // 正则表达式
    this._regular = {
      // 手机号
      phone: /^[1][3,4,5,7,8][0-9]{9}$/,
      // 验证邮箱
      email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
      // 身份证
      idcard: /^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/,
      // 整数或者小数
      isdecimal: /^[0-9]*([.]{1}[0-9]*){0,1}$/,
      // 数字和字母
      alphanumeric: /^[A-Za-z0-9]+$/,
      // 纯字母
      letter: /^[A-Za-z]+$/,
      // 小写字母
      lowercaseletters: /^[a-z]+$/,
      // 字母或者特殊符号
      format1: /^[A-Za-z,.!@$%^&*_+=;:、?./]+$/,
      // 中文，字母或特殊符号
      format2: /^[\u4e00-\u9fa5A-Za-z0-9,.!@$%^&*_+=;:、?./]+$/,
      // 字母，数字或特殊符号
      format3: /^[A-Za-z0-9,.!@$%^&*_+=;:、?./]+$/
    }
  }

  /**
   * 非空验证
   * @param {*} message 提示信息
   * @param {*} trigger 触发器
   */
  verifyRequired = (message = '不能为空！', trigger = 'change') => {
    return {
      required: true,
      message: message,
      trigger: trigger
    }
  }

  /**
   * 验证手机号
   */
  verifyPhone = (rule, value, callback) => {
    console.log(rule)
    if (value && !this._regular.phone.test(value)) {
      callback(new Error('请输入正确的手机号！'))
    } else {
      callback()
    }
  }

  /**
   * 验证手机号
   */
  verifyEmail = (rule, value, callback) => {
    if (value && !this._regular.email.test(value)) {
      callback(new Error('请输入正确的邮箱！'))
    } else {
      callback()
    }
  }

  /**
   * 验证身份证
   */
  verifyIdcard = (rule, value, callback) => {
    if (value && !this._regular.idcard.test(value)) {
      callback(new Error('请输入正确的身份证！'))
    } else {
      callback()
    }
  }

  /**
   * 验证整数或者小数
   */
  verifyIsdecimal = (rule, value, callback) => {
    if (value && !this._regular.isdecimal.test(value)) {
      callback(new Error('必须为整数或者小数！'))
    } else {
      callback()
    }
  }

  /**
   * 验证数字和字母
   */
  verifyAlphanumeric = (rule, value, callback) => {
    if (value && !this._regular.alphanumeric.test(value)) {
      callback(new Error('必须为数字和字母！'))
    } else {
      callback()
    }
  }

  /**
   * 验证纯字母
   */
  verifyLetter = (rule, value, callback) => {
    if (value && !this._regular.letter.test(value)) {
      callback(new Error('必须为字母！'))
    } else {
      callback()
    }
  }

  /**
   * 验证小写字母
   */
  verifyLowercaseletters = (rule, value, callback) => {
    if (value && !this._regular.lowercaseletters.test(value)) {
      callback(new Error('必须为字母！'))
    } else {
      callback()
    }
  }

  /**
   * 验证字母或者特殊符号
   */
  verifyFormat1 = (rule, value, callback) => {
    if (value && !this._regular.format1.test(value)) {
      callback(new Error('必须为字母或特殊符号！'))
    } else {
      callback()
    }
  }

  /**
   * 验证中文，字母或特殊符号
   */
  verifyFormat2 = (rule, value, callback) => {
    if (value && !this._regular.format2.test(value)) {
      callback(new Error('必须为中文，字母或特殊符号！'))
    } else {
      callback()
    }
  }

  /**
   * 验证字母，数字或特殊符号
   */
  verifyFormat3 = (rule, value, callback) => {
    if (value && !this._regular.format3.test(value)) {
      callback(new Error('必须为字母，数字或特殊符号！'))
    } else {
      callback()
    }
  }
}

/*
  使用方法

  import { validate } from '@/plugin/validate'
  rules:{
    username: [validate.verifyRequired('姓名不能为空！')],
    password: [validate.verifyRequired('密码不能为空！')],
    phone: [
      { validator: validate.verifyPhone, trigger: 'change' }
    ],
    email: [
      validate.verifyRequired('邮箱不能为空！'),
      { validator: validate.verifyEmail, trigger: 'change' }
    ]
  }
*/

let validate = new Validate()

export {
  validate
}