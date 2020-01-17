<template>
  <div id="login">
    <div class="bg">
      <el-footer>
        <p>&copy; 四川精准医疗科技有限责任公司</p>
      </el-footer>
    </div>
    <div class="container">
      <div class="login">
        <div class="top">
          <img src="../../assets/images/login/logo-top.png" alt />
        </div>
        <div class="login-box">
          <el-tabs v-model="activeName">
            <!-- 密码登录 -->
            <el-tab-pane label="密码登录" name="1">
              <el-form ref="passwordFrom" :rules="rules" :model="passwordFrom">
                <el-form-item prop="mobile">
                  <el-input
                    placeholder="手机号码"
                    maxlength="11"
                    clearable
                    v-model="passwordFrom.mobile"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    @click.native="changeEye"
                    :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                    :type="isOpen ? 'text' : 'password'"
                    maxlength="30"
                    placeholder="登录密码"
                    v-model="passwordFrom.password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="logSubmit('passwordFrom')">登 录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <!-- 验证码登录 -->
            <el-tab-pane label="验证码登录" name="2">
              <el-form ref="codeFrom" :rules="rules" :model="codeFrom">
                <el-form-item prop="mobile">
                  <el-input placeholder="手机号码" maxlength="11" clearable v-model="codeFrom.mobile"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input placeholder="请输入短信验证码" maxlength="6" v-model="codeFrom.code"></el-input>
                  <countDown
                    :className="'get-code'"
                    :downClass="'countdown'"
                    :countParams="countParams"
                  ></countDown>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="logSubmit('codeFrom')">登 录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
          <div class="login-foot">
            <p class="fw400 c666" @click="$router.push({name:'personReg'})">不是会员，去注册</p>
            <p class="c999" @click="$router.push({name:'forgetPsd'})">忘记密码?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import personRouter from "@/router/routers/person";
// import staticRouter from "@/router/staticRouter";
// import enterpriseRouter from "@/router/routers/enterprise";
import { validate } from "@/utils/validate";
import countDown from "@/views/login/countDown/countDown.vue";
// import { mapActions } from 'vuex'
export default {
  name: "home",
  data() {
    return {
      activeName: "1",
      isOpen: false,
      active: "0",
      loginWay: "pwd",
      countParams: {
        api: "SendLoginCode",
        params: {
          mobile: ""
        }
      },
      // 密码
      passwordFrom: {
        mobile: "",
        password: ""
      },
      // 验证码
      codeFrom: {
        mobile: "",
        code: ""
      },
      rules: {
        mobile: [
          validate.verifyRequired("手机不能为空！"),
          { validator: validate.verifyPhone, trigger: "submit" }
        ],
        password: [
          validate.verifyRequired("密码不能为空！"),
          { validator: validate.verifyPwd, trigger: "submit" }
        ],
        code: [validate.verifyRequired("短信验证码不能为空！")]
      }
    };
  },
  components: {
    countDown
  },
  methods: {
    changeEye(e) {
      if (e.target.className.includes("yanjing")) {
        this.isOpen = !this.isOpen;
      }
    },
    // 提交登录
    logSubmit(formName) {
      let loading;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let interfaceName =
            this.activeName === "1" ? "personLogin" : "PersonSmsCodeLogin";
          let params =
            this.activeName === "1" ? this.passwordFrom : this.codeFrom;
          loading = this.$loading({
            lock: false,
            text: "正在登录...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          this.$api[interfaceName](params)
            .then(res => {
              let _userInfo = {
                token: res.token,
                personInfo: res
              };
              //存储store
              this.$store.commit("INCREMENT_CHANGEUSERINFO", _userInfo);
              // console.log("保存数据");
              // console.log(this.$store.state.user.userInfo.token);
              // this.$store.dispatch("userRouterType", true);
              setTimeout(() => {
                loading.close();
                this.$router.push({ name: "userCener" });
              }, 1500);
            })
            .catch(msg => {
              loading.close();
              this.$showMsg(msg);
            });
        } else {
          return false;
        }
      });
    }
  },
  computed: {
    newRules() {
      let val = {
        mobile: [
          validate.verifyRequired("手机不能为空！"),
          { validator: validate.verifyPhone, trigger: "change" }
        ]
      };

      if (this.loginWay === "pwd") {
        val.password = [
          validate.verifyRequired("密码不能为空！"),
          { validator: validate.verifyPwd, trigger: "change" }
        ];
      } else {
        val.code = [validate.verifyRequired("短信验证码不能为空！")];
      }
      return val;
    }
  },
  watch: {
    "codeFrom.mobile"(newVal, oldVal) {
      this.countParams.params.mobile = newVal;
    }
  }
};
</script>
<style lang="less">
#login {
  .bg {
    width: 100%;
    position: absolute;
    height: 100vh;
    z-index: -1;
    background: url("../../assets/images/login/bg_img.png") center center
      no-repeat;
  }

  .login {
    height: 494px;
    width: 872px;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .top {
      position: absolute;
      top: -100px;
      left: 25%;
    }
    .login-box {
      width: 390px;
      height: 100%;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(120, 208, 193, 1);
      border-radius: 25px;
      position: absolute;
      right: 0;
      top: -2px;
      padding: 30px 40px;
      .el-tabs {
        padding-top: 40px;
        .el-tabs__item {
          font-size: 16px;
          line-height: 20px;
          color: #666;
          &.is-active {
            color: #78d0c1;
            font-weight: bold;
            font-size: 18px;
          }
        }
        .el-tabs__nav-wrap::after,
        .el-tabs__active-bar {
          height: 4px;
          width: 194px;
        }
        .el-form-item {
          margin-top: 30px;
        }
      }

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
      .el-form-item {
        // margin-bottom: 45px;
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
          font-size: 14px;
          cursor: pointer;
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
    position: absolute;
    bottom: 5px;
    width: 100%;
  }
}
</style>
