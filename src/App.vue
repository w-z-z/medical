<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:51:42
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 13:22:07
 -->
<template>
  <div ref="appEn"
    id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppEntry",
  methods: {},
  created() {
    //清空注册数据
    this.$store.dispatch("regData", {});
    // console.log("页面刷新");
  },
  methods: {}
};
</script>

<style scoped>
</style>