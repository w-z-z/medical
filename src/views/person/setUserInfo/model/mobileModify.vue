<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-25 14:45:05
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-14 16:07:42
 -->
<template>
  <div id="mobileModify">
    <h2 class="fs24 tc ptb55">修改手机号码</h2>
    <el-tabs v-model="activeName">
      <!-- 步骤一 -->
      <el-tab-pane label="01/验证手机号码" disabled name="1">
        <el-form
          hide-required-asterisk
          class="form"
          ref="oldFrom"
          :rules="rules"
          :model="oldFrom"
          label-position="top"
        >
          <el-form-item prop="mobile" label="手机号码">
            <el-input placeholder="手机号码" maxlength="11" clearable v-model="oldFrom.mobile"></el-input>
          </el-form-item>

          <el-form-item prop="code" label="验证码">
            <el-input placeholder="请输入短信验证码" maxlength="6" v-model="oldFrom.code"></el-input>
            <countDown :className="'get-code'" :downClass="'countdown'" :countParams="countParams1"></countDown>
          </el-form-item>

          <el-form-item class="mt60">
            <el-button class="fl" @click="$router.push({name:'setUserInfo'})">上一步</el-button>
            <el-button class="fr" type="primary" @click="nextStep('oldFrom')">下一步</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!-- 步骤二 -->
      <el-tab-pane label="02/设置新手机号码" disabled name="2">
        <el-form
          hide-required-asterisk
          class="form"
          ref="newForm"
          :rules="rules"
          :model="newForm"
          label-position="top"
        >
          <el-form-item prop="mobile" label="手机号码">
            <el-input placeholder="手机号码" maxlength="11" clearable v-model="newForm.mobile"></el-input>
          </el-form-item>

          <el-form-item prop="code" label="验证码">
            <el-input placeholder="请输入短信验证码" maxlength="6" v-model="newForm.code"></el-input>
            <countDown :className="'get-code'" :downClass="'countdown'" :countParams="countParams2"></countDown>
          </el-form-item>

          <el-form-item class="mt60">
            <el-button class="fl" @click="activeName='1'">上一步</el-button>
            <el-button class="fr" type="primary" @click="submitModify('newForm')">验证</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { validate } from "@/utils/validate";
import { mapGetters } from "vuex";
import countDown from "@/views/login/countDown/countDown.vue";
export default {
  components: {
    countDown
  },
  data() {
    return {
      activeName: "1",
      isDisabled: true,
      countParams1: {
        api: "SendCodeByOldMobile",
        params: {
          mobile: ""
        }
      },
      countParams2: {
        api: "SendCodeByNewMobile",
        params: {
          mobile: "",
          sms_id: ""
        }
      },
      oldFrom: {
        mobile: "",
        code: ""
      },
      newForm: {
        mobile: "",
        code: ""
      },
      rules: {
        mobile: [
          validate.verifyRequired("手机不能为空！"),
          { validator: validate.verifyPhone, trigger: "change" }
        ],
        code: [validate.verifyRequired("短信验证码不能为空！")]
      }
    };
  },
  methods: {
    nextStep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 验证原手机号code;
          this.$api["CheckCodeByOldMobile"]({ code: this.oldFrom.code })
            .then(res => {
              this.countParams2.params.sms_id = res.sms_id;
              this.activeName = "2";
            })
            .catch(msg => {
              this.$showMsg(msg);
            });
        } else {
          return false;
        }
      });
    },
    // 提交验证
    submitModify(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$api["UpdateMobile"](this.newForm)
            .then(res => {
              this.$showMsg("手机号码已变更，请重新登录");
              setTimeout(() => {
                this.$clearAllUserData.call(this);
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
  created() {
    this.oldFrom.mobile = this.userInfo.personInfo.mobile;
    this.countParams1.params.mobile = this.oldFrom.mobile;
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  watch: {
    "oldFrom.mobile"(newVal, oldVal) {
      this.countParams1.params.mobile = newVal;
    },
    "newForm.mobile"(newVal, oldVal) {
      this.countParams2.params.mobile = newVal;
    }
  }
};
</script>

<style lang="scss">
#mobileModify {
  background: #fff;
  border-radius: 10px;
  margin-bottom: 30px;
  .el-tabs {
    width: 600px;
    margin: 0 auto;
    .el-tabs__item {
      max-width: 300px;
      width: 100%;
      font-size: 18px;
      text-align: center;
      line-height: 30px;
      color: #666;
      &.is-active {
        font-weight: bold;
        color: #78d0c1;
      }
    }
    .el-tabs__nav-wrap::after,
    .el-tabs__active-bar {
      height: 4px;
    }
    .form {
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 70px;
    }
  }
}
</style>