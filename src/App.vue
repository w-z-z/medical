<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:51:42
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 16:21:39
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
    console.log(this.$showMsg("hbfghf"));
  }
};
</script>

<style scoped>
</style>