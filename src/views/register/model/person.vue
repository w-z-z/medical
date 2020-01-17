<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 16:19:42
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-14 16:31:31
 -->
<template>
  <div>
    <div v-show="!formShow" class="person-step1">
      <div class="person-reg ptb55 mr0auto bgcfff">
        <!-- 步骤一 -->
        <h1 class="tc fs24 c333 mb30 fw400">个人注册</h1>
        <el-form
          class="mr0auto"
          label-position="top"
          label-width="80px"
          hide-required-asterisk
          ref="regpersonform"
          :model="regpersonform"
          :rules="personRules"
        >
          <el-form-item label="手机号码" prop="mobile">
            <el-input placeholder="请输入手机号码" maxlength="11" clearable v-model="regpersonform.mobile"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input placeholder="请输入短信验证码" maxlength="6" v-model="regpersonform.code"></el-input>
            <countDown :className="'get-code'" :downClass="'countdown'" :countParams="countParams"></countDown>
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
              <a class="url-tag" @click="toPage('/service')">《服务条款》</a>和
              <a class="url-tag" @click="toPage('/privacyStatement')">《隐私声明》</a>
            </label>
          </el-form-item>
          <el-form-item>
            <el-button class="fl" @click="lastStep('/')">上一步</el-button>
            <el-button
              class="fr"
              type="primary"
              :disabled="ischecked"
              @click="nextStep('regpersonform')"
            >下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-show="formShow" class="person-step2">
      <div class="personal-reg ptb55 mr0auto bgcfff">
        <h1 class="tc fs24 c333 mb30 fw400">基本信息</h1>
        <el-form
          class="mr0auto"
          label-position="top"
          label-width="80px"
          hide-required-asterisk
          ref="infoForm"
          :model="infoForm"
          :rules="infoRules"
        >
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="真实姓名（必填项）" clearable v-model="infoForm.name"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="sex">
            <el-select placeholder="必填项" v-model="infoForm.sex">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="生日（年月日）" prop="birth">
            <el-date-picker
              v-model="infoForm.birth"
              type="date"
              placeholder="必选项"
              format="yyyy 年 MM 月 dd 日"
              value-format="timestamp"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="身高（cm）" prop="height">
            <el-input placeholder="必填项，如170.5" clearable v-model="infoForm.height"></el-input>
          </el-form-item>

          <el-form-item label="体重（kg）" prop="weight">
            <el-input placeholder="必填项，如50.75" clearable v-model="infoForm.weight"></el-input>
          </el-form-item>

          <el-form-item class="mt70">
            <el-button class="fl" @click="lastStep()">上一步</el-button>
            <el-button class="fr" type="primary" @click="submitReg('infoForm')">完成注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
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
      isOpen: false,
      ischecked: true,
      formShow: false,
      countParams: {
        api: "SendRegisterCode",
        params: {
          mobile: ""
        }
      },
      // 步骤一
      regpersonform: {
        mobile: "",
        code: "",
        password: ""
      },
      personRules: {
        mobile: [
          validate.verifyRequired("手机不能为空！"),
          { validator: validate.verifyPhone, trigger: "submit" }
        ],
        password: [
          validate.verifyRequired("密码不能为空！"),
          { validator: validate.verifyPwd, trigger: "submit" }
        ],
        code: [validate.verifyRequired("短信验证码不能为空！")]
      },
      // 步骤二
      infoForm: {
        name: "",
        sex: "",
        birth: "",
        height: "",
        weight: ""
      },
      infoRules: {
        name: [validate.verifyRequired("姓名不能为空！")],
        sex: [validate.verifyRequired("性别不能为空！")],
        birth: [validate.verifyRequired("生日不能为空！")],
        height: [validate.verifyRequired("身高不能为空！")],
        weight: [validate.verifyRequired("体重不能为空！")]
      }
    };
  },

  methods: {
    changeEye(e) {
      if (e.target.className.includes("yanjing")) {
        this.isOpen = !this.isOpen;
      }
    },
    // 同意协议
    argee() {
      this.ischecked = !this.ischecked;
    },
    toPage(path) {
      let formData = Object.assign({}, this.getRegData, this.regpersonform);
      this.$store.dispatch("regData", formData);
      let routeData = this.$router.resolve({ path: `${path}` });
      window.open(routeData.href, "_blank");
    },
    // 下一步-验证验证码
    nextStep() {
      this.$refs.regpersonform.validate(valid => {
        if (valid) {
          // 验证验证码;
          this.$api["CheckRegisterCode"](this.regpersonform)
            .then(res => {
              this.regpersonform.sms_id = res.sms_id;
              clearInterval(this.timer);
              this.formShow = true;
            })
            .catch(msg => {
              this.$showMsg(msg);
            });
        } else {
          return false;
        }
      });
    },
    // 上一步
    lastStep(path) {
      if (path === "/") {
        this.$store.dispatch("regData", {});
        this.$router.push("/");
      } else {
        this.regpersonform = {};
        this.$refs.regpersonform.resetFields();
        this.formShow = false;
      }
    },

    // 注册
    submitReg(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //  注册接口
          let { name, sex, birth, height, weight } = this.infoForm;
          let submitForm = {
            ...this.regpersonform,
            true_name: name,
            sex: sex === "男" ? 1 : 2,
            birthday: Number(birth) / 1000,
            weight: Number(weight),
            height: Number(height)
          };

          this.$api["PersonRegister"](submitForm)
            .then(res => {
              this.$showMsg("注册已完成，请您登录！", 3);
              this.$store.dispatch("regData", {});
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
  created() {
    this.regpersonform = this.getFormData;
  },
  computed: {
    ...mapGetters(["getRegData"]),
    getFormData() {
      let data = Object.assign({}, this.getRegData);
      return data;
    }
  },
  watch: {
    "regpersonform.mobile"(newVal, oldVal) {
      this.countParams.params.mobile = newVal;
    }
  }
};
</script>

<style lang="less" scoped>
.person-step1 {
  .person-reg {
    max-width: 1087px;
    width: 90%;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
  }
}
.person-step2 {
  padding: 82px 0;
  .personal-reg {
    max-width: 1087px;
    width: 90%;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
  }
}
</style>