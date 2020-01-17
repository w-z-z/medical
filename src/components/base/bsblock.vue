<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 10:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-24 13:46:25
 -->
<template>
  <div :class='["bsBlock"]'>

  </div>
</template>
<script>
export default {
  name: "bsBlock",
  props: {
    label: {
      // 按钮显示文本
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.bsBlock {
  background: white;
  padding: 15px 20px;
  margin: 10px;
}
</style>
