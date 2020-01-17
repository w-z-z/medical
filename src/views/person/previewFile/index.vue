<!--
 * @Description: 文件预览
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-25 20:27:12
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:07:17
 -->
<template>
  <div class="previewFile">
    <div class="imgBox"
      v-if="nowFiles.file_type=='jpg'||nowFiles.file_type=='png'||nowFiles.file_type=='jpeg'">
      <img :src="nowFiles.file_url"
        alt="">
    </div>
    <div v-else-if="nowFiles.file_type=='pdf'">
      <div class="ohterFiles">
        <iframe ref="mainiframe"
          :src="nowFiles.file_url"
          style="height:100%;width:100%"></iframe>
      </div>
    </div>
    <div v-else>
      <a :href="nowFiles.file_url"
        :download="new Date().getTime()+'.'+nowFiles.file_type">
        点击下载文件
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "previewFile",
  components: {},
  data() {
    return {
      nowFiles: {}
    };
  },
  props: {
    pdfUrl: {
      type: [Object],
      default: null
    }
  },
  watch: {
    pdfUrl(value) {
      // console.log(value);
      this.nowFiles = value;
    }
  },
  methods: {
    clickbutton() {}
  },
  created() {
    // console.log(this.nowFiles);
    this.nowFiles = this.pdfUrl;
  }
};
</script>
<style lang='scss' scoped>
.previewFile {
  width: 100%;
  .ohterFiles {
    height: 75vh;
  }
  .imgBox {
    width: 100%;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
