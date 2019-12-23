<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 16:19:42
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 18:57:38
 -->
<template>
  <div>
    <div v-if="!formShow" class="person-step1">
      <div class="person-reg ptb55 mr0auto bgcfff">
        <h1 class="tc fs24 c333 mb30 fw400">个人注册</h1>
        <el-form
          class="mr0auto"
          label-position="top"
          label-width="80px"
          hide-required-asterisk
          ref="regpersonform"
          :model="regpersonform"
          :rules="rules"
        >
          <el-form-item label="手机号码" prop="mobile">
            <el-input placeholder="请输入手机号码" clearable v-model="regpersonform.mobile"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input placeholder="请输入短信验证码" v-model="regpersonform.code"></el-input>
            <a class="get-code" v-show="!timeShow" @click="sendcode">获取验证码</a>
            <a class="get-code countdown" v-show="timeShow" @click="sendcode">{{ time }} 秒</a>
          </el-form-item>
          <el-form-item label="登录密码" prop="password">
            <el-input
              @click.native="changeEye"
              :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
              :type="isOpen ? 'text' : 'password'"
              placeholder="请设置登录密码，不少于6位"
              v-model="regpersonform.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <input type="checkbox" id="checkbox" name="type" class="regular-check repaytype argee" />
            <label for="checkbox" @click="argee"></label>
            <label class="check-label">
              我同意并接受用户
              <a class="url-tag" @click="nextStep('/service')">《服务条款》</a>和
              <a class="url-tag" @click="nextStep('/service')">《隐私声明》</a>
            </label>
          </el-form-item>
          <el-form-item>
            <el-button class="fl" @click="nextStep('/register')">上一步</el-button>
            <el-button
              class="fr"
              type="primary"
              :disabled="ischecked"
              @click="changePage('true')"
            >下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-if="formShow" class="person-step2">
      <div class="personal-reg ptb55 mr0auto bgcfff">
        <h1 class="tc fs24 c333 mb30 fw400">基本信息</h1>
        <el-form
          class="mr0auto"
          label-position="top"
          label-width="80px"
          hide-required-asterisk
          ref="regpersonform"
          :model="regForm"
          :rules="rules"
        >
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="真实姓名（必填项）" clearable v-model="regForm.name"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="sex">
            <el-select placeholder="必填项" v-model="regForm.sex">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="生日（年月日）" prop="birth">
            <el-date-picker
              v-model="regForm.birth"
              type="date"
              placeholder="必选项"
              format="yyyy 年 MM 月 dd 日"
              value-format="timestamp"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="身高" prop="height">
            <el-input placeholder="必填项，如170.5" clearable v-model="regForm.height"></el-input>
          </el-form-item>

          <el-form-item label="体重（kg）" prop="weight">
            <el-input placeholder="必填项，如50.75" clearable v-model="regForm.weight"></el-input>
          </el-form-item>

          <el-form-item label="任职公司">
            <el-input placeholder="若公司为您购买，请准确填写（非必填项）" clearable v-model="regForm.company"></el-input>
          </el-form-item>

          <el-form-item class="mt70">
            <el-button class="fl" @click="changePage('false')">上一步</el-button>
            <el-button class="fr" type="primary" @click="nextStep('/')">完成注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validate } from "@/utils/validate";
export default {
  data() {
    return {
      isOpen: false,
      timeShow: false,
      time: 59,
      formShow: false,
      regpersonform: {
        mobile: "",
        code: "",
        password: ""
      },
      regForm: {
        name: "",
        sex: "",
        birth: "",
        height: "",
        weight: "",
        company: ""
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
      },
      ischecked: true
    };
  },

  methods: {
    changeEye(e) {
      if (e.target.className.includes("yanjing")) {
        this.isOpen = !this.isOpen;
      }
    },

    // 发送验证码
    sendcode() {
      this.timeShow = true;
      this.countdown();
      this.getRegCode(); //发送验证码
    },
    getRegCode() {
      // 请求验证码接口
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
    nextStep(path) {
      this.$router.push(`${path}`);
    },
    argee() {
      this.ischecked = !this.ischecked;
    },
    changePage(val) {
      this.formShow = val === "true" ? true : false;
      this.ischecked = true;
    }
  }
};
</script>

<style lang="less" scoped>
.person-step1 {
  padding: 122px 0 145px;
  .person-reg {
    width: 1087px;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
  }
}
.person-step2 {
  padding: 82px 0;
  .personal-reg {
    width: 1087px;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
  }
}
</style>