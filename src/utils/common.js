/*
 * @Description: 公共方法
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-23 15:53:12
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 14:42:30
 */
import {
  Message
} from 'element-ui';
import {
  createRouter
} from "@/router/index";
import * as formatstrFun from "@/utils/formatstr";

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
  Message.closeAll()
  return Message(new msgCalss({
    ...obj
  }))
}

function getFormatTime(time, fmt = 'yyyy-MM-dd') {
  return formatstrFun.getFormat(fmt, time)
}
//清除所有数据并退出
function clearAllUserData() {
  this.$store.dispatch("changeUserInfo", {});
  // this.$router.hasAddRouter = false;
  // this.$router.matcher = createRouter().matcher;
  this.$router.replace({
    name: "login"
  });
}


function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function getAge(birthday) {
  if (birthday) {
    var birthDayTime = new Date(birthday).getTime();
    var nowTime = new Date().getTime();
    return Math.ceil((nowTime - birthDayTime) / 31536000000);

  } else {
    return "--";
  }

}
//去除收尾空白
String.prototype.trim = function () {
  return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
};
//  判断是否为数组
Array.prototype.isArray = function (source) {
  return '[object Array]' == Object.prototype.toString.call(source);
};


export default {
  install(Vue) {
    Vue.prototype.$showMsg = showMsg;
    Vue.prototype.$formatTime = getFormatTime;
    Vue.prototype.$getAge = getAge;
    Vue.prototype.$backTop = backTop;
    Vue.prototype.$clearAllUserData = clearAllUserData;
  }
}