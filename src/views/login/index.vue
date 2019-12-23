<template>
  <div id="login">
    <div class="container">
      <div class="top">
        <img src="../../assets/images/login/logo-top.png" alt />
      </div>
      <div class="login">
        <div class="login-box">
          <div class="login-head">
            <p @click="changeActive('0')" :class="active === '0' ? 'active' :''">个人用户</p>
            <p @click="changeActive('1')" :class="active === '1' ? 'active' :'' ">企业用户</p>
          </div>
          <div class="login-form">
            <el-form class="mt60 person-pwd" ref="loginFrom" :rules="rules" :model="loginForm">
              <el-form-item prop="mobile">
                <el-input placeholder="手机号码" clearable v-model="loginForm.mobile"></el-input>
              </el-form-item>
              <el-form-item prop="password" v-show="loginWay==='pwd'">
                <el-input
                  @click.native="changeEye"
                  :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                  :type="isOpen ? 'text' : 'password'"
                  placeholder="登录密码"
                  v-model="loginForm.password"
                ></el-input>
              </el-form-item>
              <el-form-item prop="code" v-show="loginWay==='code'">
                <el-input placeholder="请输入短信验证码" v-model="loginForm.code"></el-input>
                <a class="get-code" v-show="!timeShow" @click="sendcode">获取验证码</a>
                <a class="get-code countdown" v-show="timeShow" @click="sendcode">{{ time }} 秒</a>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="logSubmit">登 录</el-button>
              </el-form-item>
              <p class="tc">
                <span class="log-icon"></span>
                <a class="url-tag" @click="changeWay">{{ loginWay==='pwd'? '验证码': '密码' }}登录</a>
              </p>
            </el-form>
          </div>
          <div class="login-foot mt70">
            <p class="fw400 c666" @click="nextStep('/reg')">不是会员，去注册</p>
            <p class="c999" @click="nextStep('/forget')">忘记密码?</p>
          </div>
        </div>
      </div>
      <el-footer>
        <p>&copy; 四川精准医疗科技有限责任公司</p>
      </el-footer>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import personRouter from "@/router/routers/person";
import staticRouter from "@/router/staticRouter";
import enterpriseRouter from "@/router/routers/enterprise";
import { validate } from "@/utils/validate";
export default {
  name: "home",
  data() {
    return {
      isOpen: false,
      timeShow: false,
      time: 59,
      active: "0",
      loginWay: "pwd",
      loginForm: {
        mobile: "",
        password: "",
        code: ""
      },
      rules: {
        mobile: [
          validate.verifyRequired("手机不能为空！"),
          { validator: validate.verifyPhone, trigger: "change" }
        ],
        password: [
          validate.verifyRequired("密码不能为空！"),
          { validator: validate.verifyPwd, trigger: "change" }
        ],
        code: [validate.verifyRequired("短信验证码不能为空！")]
      }
    };
  },
  components: {},
  methods: {
    changeEye(e) {
      if (e.target.className.includes("yanjing")) {
        this.isOpen = !this.isOpen;
      }
    },
    // 发送验证码
    sendcode() {
      this.timeShow = true;
      this.countdown(); //倒计时
      this.getLoginCode(); //发送验证码
    },
    async getLoginCode() {
      await sendLoginCode({ mobile: this.mobile });
    },
    countdown() {
      let timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          clearInterval(timer);
          this.timeShow = false;
        }
      }, 1000);
    },

    changeActive(role) {
      this.active = role;
    },
    nextStep(path) {
      this.$router.push(`${path}`);
    },
    changeWay() {
      this.loginWay = this.loginWay === "pwd" ? "code" : "pwd";
    },
    logSubmit() {
      this.$refs.loginFrom.validate(valid => {
        if (valid) {
          let userInfo = {
            type: this.active
          };
          if (this.active === "0") {
            this.$api["personLogin"](this.loginForm).then(res => {
              console.log(res);
              userInfo["routers"] = personRouter;
              //存储store
              this.$store.dispatch("changeUserInfo", userInfo);
              this.$router.push({ name: "userCener" });
            });
          } else {
            this.$api["companyLogin"](this.loginForm).then(res => {
              userInfo["routers"] = enterpriseRouter;
              this.$store.dispatch("changeUserInfo", userInfo);
              this.$router.push({ name: "userCener" });
            });
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  background: url("../../assets/images/login/bg_img.png") center center
    no-repeat;
  .top {
    text-align: center;
    padding: 102px 0 50px;
  }
  .login {
    height: 612px;
    position: relative;
    margin-bottom: 50px;
    .login-box {
      width: 487px;
      height: 612px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(120, 208, 193, 1);
      border-radius: 25px;
      position: absolute;
      right: 30px;
      top: 2px;
      padding: 30px 50px;
      .login-head {
        width: 240px;
        p {
          display: inline-block;
          font-size: 24px;
          width: 120px;
          line-height: 60px;
          color: #666;
          text-align: center;
          padding: 0 10px;
          &.active {
            font-weight: bold;
            color: #78d0c1;
          }
          &.active::after {
            content: "";
            width: 120px;
            height: 3px;
            background: #78d0c1;
            margin-left: -10px;
            display: block;
          }
        }
      }
      .el-form-item{
        margin-bottom: 45px;
      }
      .log-icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../../assets/images/login/yanzhengma.png") center
          no-repeat;
        vertical-align: middle;
        margin-right: 10px;
      }
      .login-foot {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
  .el-footer {
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #999999;
  }
}
</style>
