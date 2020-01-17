<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2020-01-14 10:49:46
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-14 16:31:13
 -->
<template>
  <div>
    <a :class="className" v-show="timeShow" @click="sendcode">获取验证码</a>
    <a :class="[className,downClass]" v-show="!timeShow">{{ time }} 秒</a>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String
    },
    downClass: {
      type: String
    },
    countParams: {
      type: Object
    }
  },
  data() {
    return {
      timeShow: true,
      time: "",
      timer: null
    };
  },
  methods: {
    sendcode: _.debounce(
      function() {
        let { api, params } = this.countParams;
        let telReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!params.mobile || !telReg.test(params.mobile)) {
          this.$showMsg("请输入正确的手机号码！");
          return;
        } else {
          this.$api[api](params)
            .then(res => {
              const TIME = 59;
              if (!this.timer) {
                this.time = TIME;
                this.timeShow = false;
                this.timer = setInterval(() => {
                  if (this.time > 0 && this.time <= TIME) {
                    this.time--;
                  } else {
                    this.timeShow = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000);
              }
            })
            .catch(msg => {
              this.$showMsg(msg);
            });
        }
      },
      500,
      {
        leading: true,
        trailing: false
      }
    )
  }
};
</script>

<style lang="scss" scoped>
</style>