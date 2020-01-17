<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-21 22:35:28
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-09 14:54:42
 -->
<template>
  <div class="person">
    <div class="container-fluid">
      <div class="container">
        <!-- 面包屑导航 -->
        <Breadcrumb></Breadcrumb>

        <div class="content-box">
          <!-- 左侧导航 -->
          <div id="left-nav">
            <!-- 企业头像 -->
            <!-- <div class="company-info bgcfff tc mb30">
              <el-avatar :size="100" fit="cover" :src="avatarCompanyUrl"></el-avatar>
              <div class="tc fw400 lh20 mt25">某某有限公司某某有限公司某某有限公司</div>
              <p class="c999 mt25">1000人以上</p>
            </div>-->
            <!-- 个人头像 -->
            <div class="user-info bgcfff tc"
              @click="$router.push({name:'setUserInfo'})">
              <el-avatar :src="userInfo.personInfo&&userInfo.personInfo.head_img?userInfo.personInfo.head_img:head_img"
                fit="cover"
                :size="50"></el-avatar>
              <div class="lh50">
                <p>
                  <img src="../../assets/images/person/shezhi.png"
                    alt />
                </p>
                <span>{{userInfo.personInfo?userInfo.personInfo.true_name:"用户名"}}</span>
              </div>
              <p class="vip-tag mr0auto fs12">{{userInfo.personInfo?userInfo.personInfo.level_name:'用户等级'}}</p>
            </div>
            <ul class="nav">
              <li v-for="(item,index) in navArr"
                :key="index"
                @click="changeRouter(item.router) ">
                <i :class="['iconfont', item.iconImg ]"></i>
                <span class="fs16">{{item.navText}}</span>
              </li>
            </ul>
          </div>
          <!-- 右侧内容 -->
          <div class="right-content">
            <router-view />
          </div>
        </div>
        <!-- 弹窗--详情 -->
        <BDdialog :dialogParam="dialogParam">
          <upload @getVal="getVal"></upload>
          <!--    <div v-loading="loading" class="uploadFile">
            <div class="uploadFileForm">
              <el-form :rules="rules" ref="uploadFileForm" :inline="false" :model="uploadFileForm">
                <el-row>
                  <el-col :span="12">
                    <el-form-item prop="check_time" label="体检日期">
                      <el-date-picker
                        v-model="uploadFileForm.check_time"
                        type="date"
                        placeholder="体检日期"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="报告名称" prop="report_name">
                      <el-input
                        style="width:220px"
                        maxlength="50"
                        v-model="uploadFileForm.report_name"
                        placeholder="报告名称"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
          文件上传-->
          <!-- <br />
                <el-form-item style="width:100%" label prop="report_file_list">
                  <div class="uploadBox">
                    <uploadFile @getFiles="getFiles" :files="files"></uploadFile>
                  </div>
                </el-form-item>
                <br />
                <el-form-item>
                  <el-button type="primary" @click="tosubmit('uploadFileForm')">提交上传</el-button>
          <el-button>取消</el-button>-->
          <!-- </el-form-item>
              </el-form>
              <p>
                支持上传压缩文件格式：
                <br />.pdf .docx .dox 支持上传图片格式：
                <br />.jpg .jpeg .png .bmp，支持多张
              </p>
            </div>
          </div>-->
        </BDdialog>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import BDdialog from "@/components/BD_dialog/index";
import uploadFile from "@/components/uploadFile/index";
import { validate } from "@/utils/validate";
import { mapGetters } from "vuex";
import upload from "@/components/Upload/upload.vue";
export default {
  name: "person",
  data() {
    return {
      avatarCompanyUrl: require("../../assets/images/home/avatar.png"),
      head_img: require("../../assets/images/person/head_img.png"),
      navArr: [
        {
          iconImg: "icon-jianlijiankangdangan_fuzhi",
          navText: "建立健康档案",
          router: "addRecord"
        },
        {
          iconImg: "icon-shangchuantijianbaogao_fuzhi",
          navText: "上传体检报告"
          // router: ""
        },
        {
          iconImg: "icon-xiaoxizhongxin_fuzhi1",
          navText: "消息中心",
          router: "message"
        }
      ],
      // loading: false,
      // rules: {
      //   report_name: [validate.verifyRequired("请输入报告名称")],
      //   check_time: [validate.verifyRequired("请选择体检日期")],
      //   report_file_list: [validate.verifyRequired("请选择上传文件")]
      // },
      // fileUrl: [],
      // uploadFileForm: {
      //   check_time: "",
      //   report_name: "",
      //   report_file_list: []
      // },
      // uploadConfig: {
      //   type: ""
      // },
      // //文件数组
      // files: [],
      dialogParam: {
        title: "上传体检报告",
        width: "950px",
        center: true,
        visible: false,
        lockScroll: true,
        okBtn: {
          show: false
        },
        noBtn: {
          show: false
        }
      }
    };
  },
  watch: {},
  components: {
    Breadcrumb,
    BDdialog,
    uploadFile,
    upload
  },
  methods: {
    //   //上传成功
    //   uploadSuccess(fileUrl) {
    //     console.log("回调返回的数组");
    //     console.log(fileUrl);
    //     this.fileUrl = fileUrl;
    //   },
    //   //提价表单
    //   tosubmit(formName) {
    //     //触发文件上传的事件
    //     console.log(this.uploadFileForm);
    //     this.$refs[formName].validate(valid => {
    //       if (valid) {
    //         this.$showMsg("提交");
    //       } else {
    //         return false;
    //       }
    //     });
    //   },
    //文件上传
    changeRouter(r) {
      if (r) {
        this.$router.push({
          name: r
        });
      } else {
        // this.uploadFile();
        this.dialogParam.visible = true;
      }
    },
    getVal(data) {
      this.dialogParam.visible = data;
      this.$router.push("/userCener/MedicalReports");
    }
    //   //获取数据
    //   getFiles(data) {
    //     this.uploadFileForm.report_file_list = data;
    //   }
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>
<style lang="scss" scoped>
.content-box {
  display: flex;
  min-width: 1200px;
  #left-nav {
    width: 200px;
    margin-right: 50px;
    .user-info,
    .company-info {
      cursor: pointer;
      padding: 20px 30px 30px;
      border-radius: 10px;
      .vip-tag {
        border: 1px solid #f5c227;
        line-height: 26px;
        width: 80px;
        color: #f5c227;
      }
      .el-avatar {
        background: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div {
        p {
          display: inline-block;
          img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-top: -6px;
            margin-right: 6px;
          }
        }
      }
    }
    .nav {
      padding: 30px 0 0;
      li {
        cursor: pointer;
        border-radius: 10px;
        line-height: 50px;
        background: #fff;
        margin-bottom: 10px;
        i {
          vertical-align: middle;
          font-size: 30px;
          margin: 0 20px 0 30px;
        }
      }
    }
  }
  .right-content {
    width: calc(100% - 250px);
    // min-height: 689px;
  }
}
</style>
