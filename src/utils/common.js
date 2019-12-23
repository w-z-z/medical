/*
 * @Description: 公共方法
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 15:53:12
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 17:52:08
 */
import {
  Message
} from 'element-ui';
import {
  createRouter
} from "@/router/index";

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
//消息方法
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

//清除所有数据并退出
function clearAllUserData() {
  this.$store.dispatch("changeUserInfo", {});
  this.$router.hasAddRouter = false;
  this.$router.matcher = createRouter().matcher;
  this.$router.push({
    name: "login"
  });
}
export default {
  install(Vue) {
    Vue.prototype.$showMsg = showMsg;
    Vue.prototype.$clearAllUserData = clearAllUserData;
  }
}