<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 14:20:01
 -->
<template>
  <!-- <div id='header'>
   header
   <button @click="fff('/login')">登录</button>
   <button @click="fff('/forgetPsd')">忘记密码</button>
   <button @click="fff('/NotFound')">404</button>
   <button @click="fff('/register')">注册</button>
   <button @click="loginOut">退出</button>
  </div>-->
  <div class="header">
    <div class="container comm-top">
      <img src="../../assets/images/login/logo.png" alt />
      <div>
        <button
          v-show="this.$route.path==='/reg'"
          class="reg-btn bgc78D0C1 cfff fw400 fs16"
        >不是会员，去注册</button>
        <button
          v-show="this.$route.path.includes('step')"
          class="reg-btn bgc78D0C1 cfff fw400 fs16"
          @click="nextStep('/login')"
        >已是会员，去登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createRouter } from "../../router/index";

export default {
  name: "Mheader",
  data() {
    return {};
  },
  computed: {},
  methods: {
    nextStep(path) {
      this.$router.push(`${path}`);
    }
    // fff(c) {
    //   this.$router.push(c);
    // },
    // loginOut() {
    //   //清空数据
    //   this.$store.dispatch("changeUserInfo", {});
    //   this.$router.hasAddRouter = false;
    //   this.$router.matcher = createRouter().matcher;
    //   this.$router.push({ name: "login" });
    // }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style  lang='less' scoped>
// #header {
//   width: 100%;
//   height: 100px;
//   background-color: aquamarine;
//   position: fixed;
//   top: 0;
//   left: 0;
// }
.header {
  .comm-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    .reg-btn {
      width: 156px;
      height: 52px;
      border-radius: 10px;
      border: 0;
      padding: 0;
      outline: none;
    }
  }
}
</style>
