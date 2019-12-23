<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 16:23:45
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 17:58:48
 -->
<template>
  <div class="company-step">
    <div class="company-reg ptb55 mr0auto bgcfff">
      <h1 class="tc fs24 c333 mb30 fw400">申请会员</h1>
      <el-form
        class="mr0auto"
        label-position="top"
        label-width="80px"
        hide-required-asterisk
        ref="regcompanyform"
        :model="regcompanyform"
        :rules="rules"
      >
        <el-form-item label="手机号码" prop="mobile">
          <el-input placeholder="请输入手机号码" clearable v-model="regcompanyform.mobile"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input placeholder="请输入短信验证码" v-model="regcompanyform.code"></el-input>
          <a class="get-code" v-show="!timeShow" @click="sendcode">获取验证码</a>
          <a class="get-code countdown" v-show="timeShow" @click="sendcode">{{ time }} 秒</a>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input
            @click.native="changeEye"
            :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
            :type="isOpen ? 'text' : 'password'"
            placeholder="请设置登录密码，不少于6位"
            v-model="regcompanyform.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input placeholder="请输入常用电子邮箱" clearable v-model="regcompanyform.email"></el-input>
        </el-form-item>
        <el-form-item label="企业名称" prop="companyName">
          <el-input placeholder="请输入企业全称" clearable v-model="regcompanyform.companyName"></el-input>
        </el-form-item>

        <el-form-item label="企业规模" prop="companyNum">
          <el-select placeholder="请选择企业规模" v-model="regcompanyform.companyNum">
            <el-option label="1-30人" value="1-30人"></el-option>
            <el-option label="30-100人" value="30-100人"></el-option>
            <el-option label="101-300人" value="101-300人"></el-option>
            <el-option label="301-1000人" value="301-1000人"></el-option>
            <el-option label="1000人以上" value="1000人以上"></el-option>
          </el-select>
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
          <el-button class="fr" type="primary" :disabled="ischecked" @click="nextStep('model')">提交申请</el-button>
        </el-form-item>
        <div class="lh30 c999">
          <p>感谢您的申请，我们将在7*24小时内完成审核！</p>
          <p>服务热线：400-123-123</p>
        </div>
      </el-form>
    </div>

    <!-- 弹窗 -->
    <el-dialog
      class="message-reg"
      title="申请已提交"
      :visible.sync="centerDialogVisible"
      width="740px"
      top="30vh"
      center
    >
      <span>我们将在7*24小时内完成审核，请您注意查收短信消息!</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">我知道了</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      timeShow: false,
      time: 59,
      ischecked: true,
      centerDialogVisible: false,
      regcompanyform: {
        mobile: "",
        code: "",
        password: "",
        email: "",
        companyName: "",
        companyNum: ""
      },
      rules: {}
    };
  },
  methods: {
    changeEye(e) {
      if (e.target.className.includes("yanjing")) {
        this.isOpen = !this.isOpen;
      }
    },
    sendcode() {
      this.timeShow = true;
      this.countdown();
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
    argee() {
      this.ischecked = !this.ischecked;
    },
    nextStep(path) {
      if (path === "model") {
        this.$refs.regcompanyform.validate(valid => {
          if (valid) {
            this.centerDialogVisible = true;
            this.regcompanyform = {};
          } else {
            return false;
          }
        });
      } else {
        this.$router.push(`${path}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.company-step {
  padding: 82px 0;
  .company-reg {
    width: 1087px;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
  }
  .message-reg {
    .el-dialog__header {
      padding: 60px 0 20px;
      .el-dialog__title {
        font-size: 24px;
      }
    }
    .el-dialog__body {
      text-align: center;
      span {
        font-size: 16px;
      }
    }
    .el-dialog__footer {
      padding: 80px 0 70px;
    }
  }
}
</style>