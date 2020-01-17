<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 20:27:01
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:07:09
 -->
<template>
  <div id="setUserInfo">
    <el-row>
      <el-col :span="8">
        <div class="card bgcfff">
          <p class="card-title"
            @click="show1 = !show1">
            <span class="fs18">修改基本信息</span>
            <span>
              <img v-show="!show1"
                src="../../../assets/images/person/xiala.png"
                alt />
              <img v-show="show1"
                src="../../../assets/images/person/shangla.png"
                alt />
            </span>
          </p>
          <!-- form -->
          <transition name="slide-fade">
            <div class="personal-info"
              v-if="show1">
              <div style="width:100%;text-align: center">
                <!-- <uploadImg @getUploadimg='getUploadimg'
                :src='regForm.head_img'></uploadImg>-->
                <uploadImg @getUploadimg="getUploadimg"
                  :src="regForm.head_img"></uploadImg>
                <br />
                <br />
              </div>
              <!-- <el-avatar :size="90"
              :src="regForm.head_img"></el-avatar>-->
              <el-form class="modify"
                label-position="top"
                label-width="80px"
                hide-required-asterisk
                ref="personForm"
                :model="regForm"
                :rules="rules">
                <el-form-item label="姓名"
                  prop="name">
                  <el-input placeholder="真实姓名（必填项）"
                    clearable
                    v-model="regForm.name"></el-input>
                </el-form-item>

                <el-form-item label="性别"
                  prop="sex">
                  <el-select placeholder="必填项"
                    v-model="regForm.sex">
                    <el-option label="男"
                      value="男"></el-option>
                    <el-option label="女"
                      value="女"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="生日（年月日）"
                  prop="birth">
                  <el-date-picker v-model="regForm.birth"
                    type="date"
                    placeholder="必选项"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="timestamp"></el-date-picker>
                </el-form-item>

                <el-form-item label="身高（cm）"
                  prop="height">
                  <el-input placeholder="必填项，如170.5"
                    clearable
                    v-model="regForm.height"></el-input>
                </el-form-item>

                <el-form-item label="体重（kg）"
                  prop="weight">
                  <el-input placeholder="必填项，如50.75"
                    clearable
                    v-model="regForm.weight"></el-input>
                </el-form-item>

                <el-form-item class="btn">
                  <el-button type="primary"
                    @click="save('personForm')">保存修改</el-button>
                </el-form-item>
              </el-form>
            </div>
          </transition>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card bgcfff">
          <p class="card-title"
            @click="show2 = !show2">
            <span class="fs18">修改登录密码</span>
            <span>
              <img src="../../../assets/images/person/xiala.png"
                alt />
            </span>
          </p>
          <!-- form -->
          <transition name="slide-fade">
            <div class="personal-info"
              v-if="show2">
              <el-form class="modify"
                label-position="top"
                label-width="80px"
                hide-required-asterisk
                ref="passwordForm"
                :model="passwordForm"
                :rules="PwdRules">
                <el-form-item label="旧密码"
                  prop="password">
                  <el-input placeholder="请输入旧密码"
                    maxlength="30"
                    @click.native="changeEye(1,$event)"
                    :suffix-icon="isOpen1 ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                    :type="isOpen1 ? 'text' : 'password'"
                    clearable
                    v-model="passwordForm.password"></el-input>
                </el-form-item>

                <el-form-item label="新密码"
                  prop="newPwd">
                  <el-input placeholder="请输入新密码"
                    maxlength="30"
                    @click.native="changeEye(2,$event)"
                    :suffix-icon="isOpen2 ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                    :type="isOpen2 ? 'text' : 'password'"
                    clearable
                    v-model="passwordForm.newPwd"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码"
                  prop="confimNewPwd">
                  <el-input placeholder="重复输入新密码"
                    maxlength="30"
                    clearable
                    @click.native="changeEye(3,$event)"
                    :suffix-icon="isOpen3 ? 'iconfont icon-faxian-yanjing' : 'iconfont icon-guanbi-yanjing'"
                    :type="isOpen3 ? 'text' : 'password'"
                    v-model="passwordForm.confimNewPwd"></el-input>
                </el-form-item>

                <el-form-item class="btn">
                  <el-button type="primary"
                    @click="save('passwordForm')">保存修改</el-button>
                </el-form-item>
              </el-form>
            </div>
          </transition>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card bgcfff">
          <p class="card-title"
            @click="$router.push({name:'mobileModify'})">
            <span class="fs18">修改手机号</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { validate } from "@/utils/validate";
import { mapGetters } from "vuex";
import uploadImg from "@/components/uploadFile/uploadImg";
export default {
  name: "setUserInfo",
  components: { uploadImg },
  data() {
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.passwordForm.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkCommon = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else if (value === this.passwordForm.password) {
        callback(new Error("新密码与旧密码一致!"));
      } else {
        if (this.passwordForm.confimNewPwd !== "") {
          this.$refs.passwordForm.validateField("confimNewPwd"); // 再次触发某个“字段”的验证
        }
        callback();
      }
    };
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      show1: true,
      show2: false,
      regForm: {
        name: "",
        sex: "",
        birth: "",
        height: "",
        weight: "",
        head_img: ""
      },
      rules: {
        name: [validate.verifyRequired("姓名不能为空！")],
        sex: [validate.verifyRequired("性别不能为空！")],
        birth: [validate.verifyRequired("生日不能为空！")],
        height: [validate.verifyRequired("身高不能为空！")],
        weight: [validate.verifyRequired("体重不能为空！")]
      },
      passwordForm: {
        password: "",
        newPwd: "",
        confimNewPwd: ""
      },
      PwdRules: {
        password: [validate.verifyRequired("旧密码不能为空！")],
        newPwd: [
          { validator: validate.verifyPwd, trigger: "change" },
          { validator: checkCommon, trigger: "blur" }
        ],
        confimNewPwd: [{ validator: checkPwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    showFrom() {
      // console.log(11);
    },
    changeEye(num, e) {
      // console.log(num, e);
      if (e.target.className.includes("yanjing")) {
        if (num === 1) {
          this.isOpen1 = !this.isOpen1;
        } else if (num === 2) {
          this.isOpen2 = !this.isOpen2;
        } else {
          this.isOpen3 = !this.isOpen3;
        }
      }
    },
    getUploadimg(data) {
      // console.log("页面获取上传的地址");
      // console.log(data);
      this.regForm.head_img = data;
    },
    // 保存修改
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 修改个人信息
          if (formName === "personForm") {
            let { name, sex, birth, height, weight, head_img } = this.regForm;
            let changeForm = {
              true_name: name,
              sex: sex === "男" ? 1 : 2,
              height: Number(height),
              weight: Number(weight),
              birthday: Number(birth) / 1000,
              head_img
            };
            this.$api["UpdatePersonUser"](changeForm)
              .then(res => {
                let newPersonInfo = Object.assign({}, this.userInfo);
                newPersonInfo.personInfo = Object.assign(
                  {},
                  newPersonInfo.personInfo,
                  changeForm
                );
                this.$store.dispatch("changeUserInfo", newPersonInfo);
                this.$showMsg("基本信息修改成功！", 3);
              })
              .catch(msg => {
                this.$showMsg(msg);
              });
          }
          // 修改密码
          else {
            let { password, newPwd, confimNewPwd } = this.passwordForm;
            let params = {
              old_password: password,
              new_password: newPwd,
              confirm_password: confimNewPwd
            };
            this.$api["UpdatePassword"](params)
              .then(res => {
                this.$showMsg("密码修改成功!请重新登录!", 3);
                setTimeout(() => {
                  this.$clearAllUserData.call(this);
                }, 2000);
              })
              .catch(msg => {
                this.$showMsg(msg);
              });
          }
        } else {
          return false;
        }
      });
    },

    // 数据回填
    backData() {
      let {
        true_name,
        sex,
        head_img,
        birthday,
        height,
        weight
      } = this.userInfo.personInfo;
      this.regForm = {
        name: true_name,
        sex: sex === 1 ? "男" : "女",
        height,
        weight,
        birth: birthday * 1000,
        head_img: head_img
          ? head_img
          : "http://file.pms.sc.cn/1578632117391.png"
      };
    }
  },
  created() {
    // 数据回填
    this.backData();
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>
<style lang="scss">
#setUserInfo {
  padding-bottom: 30px;
  .card {
    width: 300px;
    border-radius: 10px;
    .card-title {
      line-height: 70px;
      border-radius: 10px;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      background: #fff;
      img {
        vertical-align: middle;
      }
    }
    .personal-info {
      padding-bottom: 20px;
      .el-avatar {
        margin: 0 auto;
        display: block;
        margin: 10px auto 20px;
      }
      .modify {
        width: 240px;
        margin: 0 auto;
        .el-input__suffix {
          right: 12px;
        }
        .el-select,
        .el-date-editor {
          width: 240px;
        }
        .el-form-item__label {
          line-height: 20px;
          padding-bottom: 6px;
          margin-left: 20px;
        }
        .el-input__inner {
          border-radius: 20px;
        }
        .btn {
          .el-form-item__content {
            text-align: center;
          }
        }
      }
    }
    .slide-fade-enter-active {
      // transition: all 0.2s ease;
    }
    .slide-fade-leave-active {
      // transition: all 0.2s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
      // transform: translateY(10px);
      opacity: 0;
    }
  }
}
</style>
