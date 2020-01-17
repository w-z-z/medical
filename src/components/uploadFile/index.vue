<!--
 * @Description: 文件上传模块
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-21 22:35:28
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-09 10:23:31
 -->
<template>
  <div class="uploadImg">
    <div class="fileTitle">
      <div class="fileBox">
        <fileView :files='fileList'></fileView>
      </div>
      <uploadView @uploadSuccess='uploadSuccess'
        v-model='allData'>
        <div class="chooseBtn"
          v-loading='allData.percentShow'>
          <i class="el-icon-plus"></i>
        </div>

      </uploadView>

    </div>
    <el-progress :percentage="allData.percentage"
      class="progress"
      status="success"
      v-show="allData.percentShow"></el-progress>
    <!-- <div class="upload">
      <el-button element-loading-text="拼命上传中"
        v-loading.fullscreen.lock="percentShow"
        @click="uploadQiniu"
        type="primary"
        size="small">上传</el-button>
    </div> -->
  </div>
</template>
<script>
import * as qiniu from "qiniu-js";
import uploadView from "@/components/uploadFile/uploadView";
import fileView from "@/components/uploadFile/model/fileView";

export default {
  name: "upload-img",
  data() {
    return {
      percentShow: false,
      percentage: 0,
      fileList: [],
      //所有的数据
      allData: {
        //文件类型
        accpetType: ["pdf", "docx", "doc", "jpg", "jpeg", "png", "bmp"],
        fileList: {
          fileName: "",
          fileType: "",
          file_url: ""
        },
        fileSize: "3072", //以kb为单位
        // 上传的进度
        percentage: 0,
        //是否显示上传蒙版
        percentShow: false
      }
    };
  },
  props: ["files"],
  watch: {
    fileList(cc) {
      let data = [...cc];
      this.files = data;
    }
  },
  // model: {
  //   prop: "files",
  //   event: "getAllFiles"
  // },
  created() {},
  components: {
    uploadView,
    fileView
  },
  watch: {
    fileList(value) {
      this.$emit("getFiles", value);
    }
  },
  methods: {
    uploadSuccess(file) {
      this.fileList.push(file);
    },
    //删除文件
    deleteFile(index) {
      this.fileList.splice(index, 1);
    },
    clearFile() {
      // 清楚所有数组
      this.fileList = [];
    }
  }
};
</script>

<style lang="less" >
.uploadImg {
  background-color: #eeeeee;
  padding: 10px;
  min-height: 123px;
  .upload {
    margin: 15px 0;
  }

  .fileTitle {
    .chooseBtn {
      width: 58px;
      height: 58px;
      border: 1px dashed #c0ccda;
      text-align: center;
      display: inline-block;
      line-height: 58px;
      cursor: pointer;
    }
  }

  .fileBox {
    float: left;
  }
  ul li {
    list-style: none;
    .el-icon-delete {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>

