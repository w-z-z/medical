<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:20:15
 -->
<template>
  <div class="header">
    <div class="container comm-top">
      <img class="logoImg"
        @click="$router.push('/')"
        src="../../assets/images/login/logo.png"
        alt />
      <div v-if="userInfo.token">
        <div @click="loginOut()"
          class="loginOut">
          <img :src="loginOutImg"
            alt="">
          <span>
            退出
          </span>
        </div>
      </div>
      <div v-else>
        <div v-if="routerName=='forgetPsd'">
          <button @click="nextStep('personReg')"
            class="reg-btn bgc78D0C1 cfff fw400 fs16">不是会员，去注册</button>
        </div>
        <div v-if="routerName=='personReg'">
          <button class="reg-btn bgc78D0C1 cfff fw400 fs16"
            @click="nextStep('login')">已是会员，去登录</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import loginOutImg from "../../assets/images/login/loginOut.png";
import { mapGetters } from "vuex";
export default {
  name: "Mheader",
  data() {
    return { loginOutImg };
  },

  methods: {
    nextStep(path) {
      this.$router.push({
        name: path
      });
    },
    loginOut() {
      this.$confirm("确定要退出登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // type: "warning"
      })
        .then(() => {
          this.$api["personLoginOut"]()
            .then(succ => {
              // this.$router.push({
              //   name: "login"
              // });
              this.$clearAllUserData.call(this);
            })
            .catch(err => {
              this.$showMsg("退出登录失败");
            });
        })
        .catch(() => {});
    }
  },

  created() {},
  computed: {
    ...mapGetters(["userInfo"]),
    routerName() {
      return this.$route.name;
    }
  }
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
  .logoImg {
    cursor: pointer;
  }
  .comm-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0;
    height: 80px;
    box-sizing: border-box;
    .reg-btn {
      width: 156px;
      height: 52px;
      border-radius: 10px;
      border: 0;
      padding: 0;
      outline: none;
    }
  }
  .loginOut {
    padding: 8px 10px;
    border-radius: 3px;
    cursor: pointer;
    img {
      width: 16px;
      margin-right: 14px;
      vertical-align: middle;
    }
    display: inline-block;
    span {
      vertical-align: middle;
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
    }
    &:hover {
      box-shadow: 5px 5px 5px #eeeeee;
    }
  }
}
</style>
