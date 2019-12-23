<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:51:42
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 16:29:55
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppEntry",
  methods: {},
  created() {
    //提示信息
    console.log(this.$showMsg("提示信息"));
  }
};
</script>

<style scoped>
</style>