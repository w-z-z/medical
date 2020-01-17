<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:51:42
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:08:39
 -->
<template>
  <div id="fileType">
    <div v-for="(item ,index) in  files"
      :key='index'
      class="downloadBox">
      <a :href='item.file_url'
        :download='`${new Date().getTime()}.${item.fileType}`'>
        <img v-if="item.fileType=='jpg'||item.fileType=='jpeg'||item.fileType=='png'"
          :src="item.file_url"
          alt="" />
        <img v-else-if="item.fileType=='doc'||item.fileType=='docx'"
          :src="iconWord"
          alt="" />
        <img v-else-if="item.fileType=='xlsx'||item.fileType=='xls'"
          :src="iconExcel"
          alt="" />
        <img v-else-if="item.fileType=='pdf'"
          :src="iconPdf"
          alt="" />
        <img v-else
          :src="iconOther"
          alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "fileType",
  data() {
    return {
      iconWord: require("@/assets/images/fileType/word.png"),
      iconExcel: require("@/assets/images/fileType/Excel.png"),
      iconPdf: require("@/assets/images/fileType/pdf.png"),
      iconOther: require("@/assets/images/fileType/other.png")
    };
  },
  props: {
    files: {
      type: [Array],
      default: null
    }
  },
  watch: {
    files(value) {
      // console.log(value);
    }
  },
  methods: {
    uploadFiles(item) {
      this.$uploadFile(item);
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
.downloadBox {
  width: 58px;
  padding: 4px;
  border: 1px solid gainsboro;
  display: inline-block;
  height: 58px;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  a:hover {
    &::after {
      content: "下载";
      position: absolute;
      line-height: 58px;
      text-align: center;
      color: white;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>