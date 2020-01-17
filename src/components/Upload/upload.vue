<template>
  <div>
    <div v-loading="loading"
      class="uploadFile">
      <div class="uploadFileForm">
        <el-form :rules="rules"
          ref="uploadFileForm"
          :inline="false"
          :model="uploadFileForm">
          <el-row>
            <el-col :span="12">
              <el-form-item prop="check_time"
                label="体检日期">
                <el-date-picker v-model="uploadFileForm.check_time"
                  type="date"
                  :picker-options="pickerDisabled"
                  placeholder="体检日期"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="报告名称"
                prop="report_name">
                <el-input style="width:220px"
                  maxlength="50"
                  v-model="uploadFileForm.report_name"
                  placeholder="报告名称"
                  value-format="timestamp"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 文件上传 -->
          <br />
          <el-form-item style="width:100%"
            label
            prop="report_file_list">
            <div class="uploadBox">
              <uploadFile ref="uploadFiles"
                @getFiles="getFiles"
                :files="files"></uploadFile>
            </div>
          </el-form-item>
          <br />
          <el-form-item>
            <el-button type="primary"
              @click="tosubmit('uploadFileForm')">提交上传</el-button>
            <!-- <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
        <p>
          <!-- 支持上传压缩文件格式： -->
          <br />.pdf .docx .doc 支持上传图片格式：
          <br />.jpg .jpeg .png .bmp 支持多张图片上传
          <br />
          每份文件大小在3MB内。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { validate } from "@/utils/validate";
import uploadFile from "@/components/uploadFile/index";
export default {
  name: "upload",
  components: {
    uploadFile
  },
  data() {
    return {
      loading: false,
      pickerDisabled: {
        disabledDate: time => {
          return time.getTime() > new Date().getTime();
        }
      },
      rules: {
        report_name: [validate.verifyRequired("请输入报告名称")],
        check_time: [validate.verifyRequired("请选择体检日期")],
        report_file_list: [validate.verifyRequired("请选择上传文件")]
      },
      fileUrl: [],
      uploadFileForm: {
        check_time: "",
        report_name: "",
        report_file_list: []
      },
      uploadConfig: {
        type: ""
      },
      //文件数组
      files: []
    };
  },
  methods: {
    //上传成功
    uploadSuccess(fileUrl) {
      // console.log("回调返回的数组");
      // console.log(fileUrl);
      this.fileUrl = fileUrl;
    },
    //提价表单
    tosubmit(formName) {
      //触发文件上传的事件
      // console.log(this.uploadFileForm);
      this.$refs[formName].validate(valid => {
        if (valid) {
          let param = {
            ...this.uploadFileForm
          };
          param.check_time = Number(param.check_time) / 1000;
          this.$api["UploadPhysicalExaminationReport"](param)
            .then(res => {
              this.$showMsg("提交成功！", 3);
              this.$refs.uploadFileForm.resetFields();
              this.files = [];
              this.$refs.uploadFiles.clearFile();
              this.$emit("getVal", false);
            })
            .catch(msg => {
              this.$showMsg("提交失败，请重试！");
            });
        } else {
          return false;
        }
      });
    },

    //获取数据
    getFiles(data) {
      this.uploadFileForm.report_file_list = data;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>