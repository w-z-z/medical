<!--
 * @Description: 上传组件的按钮
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:51:42
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-15 14:04:14
 -->
<template>
  <div id="uploadView">
    <div style="height:100%"
      @click.stop="uploadFile">
      <slot>
      </slot>
    </div>
    <input type="file"
      ref="inputfile"
      @change="fileChangeHandle"
      style="display: none;">
  </div>
</template>

<script>
import * as qiniu from "qiniu-js";
export default {
  name: "uploadView",
  methods: {},
  data() {
    return {
      percentage: 0,
      percentShow: false,
      token: "",
      urls: "",
      fileList: [],
      fileUrl: []
    };
  },
  props: ["allData"],
  model: {
    prop: "allData",
    event: "updateSometing"
  },
  created() {
    this.$api["GetQiNiuUploadToken"]()
      .then(res => {
        this.token = res;
      })
      .catch(msg => {
        this.$showMsg("资源获取失败");
        // this.$showMsg(msg);
      });
  },
  watch: {},
  methods: {
    uploadFile() {
      // 触发input的点击事件;
      const node = this.$refs.inputfile;
      node.click();
    },
    fileChangeHandle() {
      const file = this.$refs.inputfile.files[0];
      // 判断文件类型
      const upType = this.allData.accpetType
        ? this.allData.accpetType
        : ["pdf", "doc", "docx", "png", "jpeg", "jpg"];
      const fileName = file.name;
      const fileSizeLimit = this.allData.accpetType
        ? this.allData.fileSize * 1024
        : 1024 * 200;
      const postfix = fileName.substring(
        fileName.lastIndexOf(".") + 1,
        fileName.length
      );
      const fileSize = file.size;
      if (fileSize > fileSizeLimit) {
        return this.$message({
          message: `文件大小应小于${(fileSizeLimit / 1024 / 1024).toFixed(2)}M`,
          type: "warning"
        });
      }
      if (upType.indexOf(postfix) === -1) {
        return this.$message({
          message: "请上传正确的文件格式",
          type: "warning"
        });
      }
      //单上传文件
      this.singleFileUpLoad(file);
    },
    singleFileUpLoad(item) {
      const fileName = item.name;
      const postfix = fileName.substring(
        fileName.lastIndexOf("."),
        fileName.length
      );
      const name = new Date().getTime() + Math.ceil(Math.random() * 100);
      // console.log(this.$md5(name));
      const token = this.token;
      const putExtra = {
        fname: fileName,
        params: {},
        mimeType: [item.type]
      };
      const config = {
        useCdnDomain: true
      };
      const observable = qiniu.upload(
        item,
        name + postfix,
        token,
        putExtra,
        config
      );
      const that = this;
      that.allData.percentShow = true;
      that.allData.percentage = 10;
      observable.subscribe(
        function(res) {
          that.allData.percentage = res.total.percent;
        },
        function(error) {
          that.$message({
            message: "图片上传失败!",
            type: "error"
          });
          that.allData.percentShow = false;
        },
        function(res) {
          that.$message({
            message: "上传成功",
            type: "success"
          });
          that.percentShow = false;
          that.imgUrl = process.env.VUE_APP_UPLOAD_URL + res.key;
          let fileType = postfix.split(".")[1];
          let obj = {
            fileName: fileName,
            fileType: fileType,
            file_url: that.imgUrl
          };
          that.allData.fileList = obj;
          that.allData.percentShow = false;
          that.$emit("uploadSuccess", obj);
        }
      );
    }
    // //删除文件
    // deleteFile(index) {
    //   this.urls.splice(index, 1);
    //   // this.$emit("deleteFile", this.urls);
    // },
    // deleteImg(index) {
    //   this.fileList.splice(index, 1);
    //   this.fileUrl.splice(index, 1);
    // }
    // 用七牛上传
    // uploadQiniu() {
    //   for (const item of this.fileList) {
    //     const fileName = item.name;
    //     const postfix = fileName.substring(
    //       fileName.lastIndexOf("."),
    //       fileName.length
    //     );
    //     const name = new Date().getTime() + Math.ceil(Math.random() * 100);
    //     const token = this.token;
    //     const putExtra = {
    //       fname: fileName,
    //       params: {},
    //       mimeType: null
    //     };
    //     const config = {
    //       useCdnDomain: true
    //     };
    //     const observable = qiniu.upload(
    //       item,
    //       name + postfix,
    //       token,
    //       putExtra,
    //       config
    //     );
    //     const that = this;
    //     this.percentShow = true;
    //     this.percentage = 10;
    //     observable.subscribe(
    //       function(res) {
    //         // console.log('图片上传进度：', res)
    //         that.percentage = res.total.percent;
    //       },
    //       function(error) {
    //         console.error("图片上传失败：", error);
    //         that.percentShow = false;
    //       },
    //       function(res) {
    //         console.log(res);
    //         that.$message({
    //           message: "上传成功",
    //           type: "success"
    //         });
    //         that.percentShow = false;
    //         that.imgUrl = that.qiniuUrl + res.key;
    //         that.fileUrl.push({ name: fileName, url: that.imgUrl });
    //         that.$emit("uploadSuccess", that.fileUrl);
    //       }
    //     );
    //   }
    // }
  }
};
</script>

<style lang='scss' scoped>
#uploadView {
  display: inline-block;
  margin-bottom: 10px;
}
</style>