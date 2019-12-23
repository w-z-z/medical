<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 18:40:31
 -->
<template>
  <div id="forget">
    <Header></Header>
    <div class="container-fluid">
      <div class="container">
        <div>
          <div class="ptb162">
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
                  :rules="rules"
                  label-position="top"
                  label-width="80px"
                >
                  <el-form-item label="手机号码" prop="mobile">
                    <el-input placeholder="请输入手机号码" clearable v-model="mobile"></el-input>
                  </el-form-item>

                  <div v-show="imgIsShow">
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
                  </div>

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
                  :rules="rules"
                  label-position="top"
                  label-width="80px"
                >
                  <el-form-item label="验证码" prop="code">
                    <el-input placeholder="请输入短信验证码" v-model="code"></el-input>
                    <a class="get-code" v-show="!timeShow" @click="sendcode">获取验证码</a>
                    <a class="get-code countdown" v-show="timeShow" @click="sendcode">{{ time }} 秒</a>
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
                  label-width="80px"
                  :rules="rules"
                  :model="pwdForm"
                >
                  <el-form-item label="登录密码" prop="password">
                    <el-input
                      placeholder="请设置登录密码，不少于6位"
                      @click.native="changeEye"
                      :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                      :type="isOpen ? 'text' : 'password'"
                      v-model="pwdForm.password"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="confirmPwd">
                    <el-input
                      placeholder="请确认登录密码"
                      @click.native="changeEye"
                      :suffix-icon="isOpen ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                      :type="isOpen ? 'text' : 'password'"
                      v-model="pwdForm.confirmPwd"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class="btn">
                    <el-button type="primary" @click="resetSubmit">确定重置</el-button>
                  </el-form-item>
                </el-form>
              </div>

              
            </div>
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
export default {
  name: "forgetPsd",
  data() {
    return {
      step: 1,
      imgIsShow: true,
      timeShow: false,
      time: 59,
      isOpen: false,
      mobile: "",
      code: "",
      pwdForm: {
        password: "",
        confirmPwd: ""
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
    nextStep(num) {
      this.step = num;
    },
    // 重置密码
    resetSubmit() {
      alert("重置成功");
    }
  }
};
</script>
<style lang="scss">
#forget {
  .el-footer {
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #999999;
  }
  .forget-content {
    width: 1087px;
    height: 612px;
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
