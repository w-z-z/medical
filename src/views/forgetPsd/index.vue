<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-14 15:39:01
 -->
<template>
  <div id="forget">
    <div class="forget-content">
      <h1 class="fs24 fw400 tc lh30 c333">安全验证</h1>
      <div class="progress">
        <p :class="step===1 ? 'step' :''">01/填写手机号码</p>
        <p :class="step===2 ? 'step' :''">02/验证信息</p>
        <p :class="step===3 ? 'step' :''">03/重置密码</p>
      </div>
      <!-- 步骤一 填写手机号 -->
      <div v-show="step===1">
        <el-form
          class="mr0auto forget-form"
          :rules="mobileRules"
          hide-required-asterisk
          ref="form1"
          label-position="top"
          label-width="80px"
          :model="mobile"
        >
          <el-form-item label="手机号码" prop="mobile">
            <el-input placeholder="请输入手机号码" maxlength="11" clearable v-model="mobile.mobile"></el-input>
          </el-form-item>

          <!-- <div v-show="imgIsShow">
                    <div class="rotate-head">
                      <p class="c999">请将下列图片点击翻转至正确方向</p>
                      <p class="c78D0C1">
                        <span class="another"></span>换一批
                      </p>
                    </div>
                    <div class="img-box mb30">
                      <p>
                        <img src="../../assets/images/login/yz1.png" alt />
                      </p>
                      <p>
                        <img src="../../assets/images/login/yz1.png" alt />
                      </p>
                      <p>
                        <img src="../../assets/images/login/yz1.png" alt />
                      </p>
                      <p>
                        <img src="../../assets/images/login/yz1.png" alt />
                      </p>
                    </div>
          </div>-->

          <el-form-item class="btn">
            <el-button type="primary" @click="nextStep(2)">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 步骤二 验证信息 -->
      <div v-show="step===2">
        <el-form
          class="mr0auto forget-form"
          hide-required-asterisk
          :rules="codeRules"
          label-position="top"
          label-width="80px"
          ref="code"
          :model="code"
        >
          <el-form-item label="验证码" prop="code">
            <el-input placeholder="请输入短信验证码" maxlength="6" v-model="code.code"></el-input>
            <countDown :className="'get-code'" :downClass="'countdown'" :countParams="countParams"></countDown>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="nextStep(3)">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 步骤三 确认重置 -->
      <div v-show="step===3">
        <el-form
          class="mr0auto forget-form"
          label-position="top"
          hide-required-asterisk
          label-width="80px"
          :rules="pwdRules"
          ref="pwdForm"
          :model="pwdForm"
        >
          <el-form-item label="登录密码" prop="password">
            <el-input
              placeholder="请设置登录密码，不少于6位"
              @click.native="changeEye(0,$event)"
              :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
              :type="isOpen ? 'text' : 'password'"
              v-model="pwdForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPwd">
            <el-input
              placeholder="请确认登录密码"
              @click.native="changeEye(1,$event)"
              :suffix-icon="isOpen1 ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
              :type="isOpen1 ? 'text' : 'password'"
              v-model="pwdForm.confirmPwd"
            ></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="resetSubmit('pwdForm')">确定重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <p class="elFooter">&copy; 四川精准医疗科技有限责任公司</p>
  </div>
</template>
<script>
import { validate } from "@/utils/validate";
import { clearInterval } from "timers";
import countDown from "@/views/login/countDown/countDown.vue";
export default {
  name: "forgetPsd",
  components: {
    countDown
  },
  data() {
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.pwdForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var newPwd = (rule, value, callback) => {
      if (this.pwdForm.confirmPwd !== "") {
        this.$refs.pwdForm.validateField("confirmPwd"); // 再次触发某个“字段”的验证
      }
      callback();
    };
    return {
      step: 1,
      imgIsShow: false,
      isOpen: false,
      isOpen1: false,
      countParams: {
        api: "SendForgetCode",
        params: {
          mobile: ""
        }
      },
      mobile: {
        mobile: ""
      },
      code: {
        code: ""
      },
      pwdForm: {
        password: "",
        confirmPwd: ""
      },
      mobileRules: {
        mobile: [
          validate.verifyRequired("手机不能为空！"),
          { validator: validate.verifyPhone, trigger: "change" }
        ]
      },
      codeRules: {
        code: [validate.verifyRequired("短信验证码不能为空！")]
      },
      pwdRules: {
        password: [
          validate.verifyRequired("请输入新密码！"),
          { validator: validate.verifyPwd, trigger: "change" },
          { validator: newPwd, trigger: "blur" }
        ],
        confirmPwd: [
          validate.verifyRequired("请再次输入新密码！"),
          { validator: checkPwd, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    changeEye(num, e) {
      if (e.target.className.includes("yanjing")) {
        if (num === 0) {
          this.isOpen = !this.isOpen;
        } else {
          this.isOpen1 = !this.isOpen1;
        }
      }
    },
    nextStep(num) {
      if (num == 2) {
        this.$refs.form1.validate(valid => {
          if (valid) {
            this.$api["CheckMobileRegistered"]({
              mobile: this.mobile.mobile
            })
              .then(res => {
                // 成功下一步
                this.step = num;
              })
              .catch(msg => {
                this.$showMsg(msg);
              });
          } else {
            return false;
          }
        });
      } else {
        this.$refs.code.validate(valid => {
          if (valid) {
            this.$api["CheckForgetCode"]({
              mobile: this.mobile.mobile,
              code: this.code.code
            })
              .then(res => {
                // 成功下一步
                this.mobile.sms_id = res.sms_id;
                this.step = num;
              })
              .catch(msg => {
                this.$showMsg(msg);
              });
          } else {
            return false;
          }
        });
      }
    },
    // 重置密码
    resetSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { password, confirmPwd } = this.pwdForm;
          let forgetForm = {
            ...this.mobile,
            confirm_password: password,
            new_password: confirmPwd
          };
          this.$api["ResetPassword"](forgetForm)
            .then(res => {
              this.$showMsg("已重置，请重新登录", 3);
              setTimeout(() => {
                this.$router.push("/login");
              }, 2000);
            })
            .catch(msg => {
              this.$showMsg(msg);
            });
        } else {
          return false;
        }
      });
    }
  },
  watch: {
    "mobile.mobile"(newVal, oldVal) {
      this.countParams.params.mobile = newVal;
    }
  }
};
</script>
<style lang="scss">
#forget {
  padding-top: 162px;
  padding-bottom: 224px;
  position: relative;
  .elFooter {
    text-align: center;
    font-size: 12px;
    color: #999999;
    position: absolute;
    bottom: 56px;
    width: 100%;
    left: 0;
  }
  .forget-content {
    max-width: 1087px;
    width: 90%;
    height: 612px;
    min-width: 800px;
    background: #fff;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
    margin: 0 auto;
    padding: 40px 85px;

    .progress {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      border-bottom: 5px solid #eee;
      margin-bottom: 50px;

      p {
        font-size: 20px;
        font-weight: bold;
        color: #78d0c1;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        width: 306px;
        line-height: 60px;

        &.step::after {
          content: "";
          height: 5px;
          width: 306px;
          background: #78d0c1;
          display: block;
          position: absolute;
        }
      }
    }

    .forget-form {
      height: 350px;
      .btn {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }

    .rotate-head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      margin-top: 30px;
      .another {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../../assets/images/login/another.png");
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .img-box {
      display: flex;
      justify-content: space-between;
      img {
        vertical-align: middle;
      }
    }
  }
}
</style>
