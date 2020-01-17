<!--
 * @Description: 文件上传模块
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-21 22:35:28
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:08:02
 -->
<template>
  <div v-loading="allData.percentShow"
    class="uploadImg_Box">
    <div class="fileTitle"
      style="height:100%">
      <uploadView style="height:100%"
        @uploadSuccess="uploadSuccess"
        v-model="allData">
        <div class="uploadImgUrl"
          style="height:100%">
          <div class="uploadShadow">
            <i class="el-icon-plus"></i>
          </div>
          <img :src="currentSrc"
            alt />
        </div>
      </uploadView>
    </div>
  </div>
</template>
<script>
import * as qiniu from "qiniu-js";
import uploadView from "@/components/uploadFile/uploadView";

export default {
  name: "upload-img",
  data() {
    return {
      //所有的数据
      allData: {
        //文件类型
        fileList: {
          fileName: "",
          fileType: "",
          file_url: ""
        },
        accpetType: ["png", "jpeg", "jpg"],
        fileSize: "800", //以kb为单位
        //当前是否成功
        // isSucc: true,
        // 上传的进度
        percentage: 0,
        //是否显示上传蒙版
        percentShow: false
      },
      currentSrc: ""
    };
  },
  props: {
    src: {
      type: [String],
      default: null
    }
  },
  created() {
    this.currentSrc = this.src;
  },
  watch: {
    currentSrc(d) {
      // console.log(d);
    }
  },
  components: {
    uploadView
  },
  methods: {
    uploadSuccess(file) {
      // console.log("上传成功");
      this.currentSrc = file.file_url;
      // console.log("值---------------" + file);
      this.$emit("getUploadimg", file.file_url);
    }
  }
};
</script>

<style lang="less"  scoped>
.uploadImg_Box {
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 1px dashed #c0ccda;
  height: 90px;
  width: 90px;
  text-align: center;
  line-height: 90px;
  .uploadImgUrl {
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
  .uploadShadow {
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    line-height: 90px;
    text-align: center;
    color: white;
  }
}
.uploadImg_Box:hover > {
  .uploadShadow {
    display: block;
  }
}
</style>

