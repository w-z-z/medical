/*
 * @Description: 公共方法
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 15:53:12
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 16:24:38
 */
import {
  Message
} from 'element-ui';

let _type = {
  1: "warning",
  2: "error",
  3: "success",
  4: "info"
}
class msgCalss {
  constructor({
    msg = '',
    type = 1,
    customClass = null,
    duration = 2000,
  } = {}) {
    // table组件显示的数据（类型 array）
    this.message = msg
    this.type = _type[type]
    this.customClass = customClass
    this.duration = duration
  }
}

function showMsg(msg, type, duration, customClass) {
  let obj = {
    msg,
    type,
    duration,
    customClass
  }
  return Message(new msgCalss({
    ...obj
  }))
}

export default {
  install(Vue) {
    Vue.prototype.$showMsg = showMsg;
  }
}