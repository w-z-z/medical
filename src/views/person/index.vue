<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-21 22:35:28
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 17:46:35
 -->
<template>
  <div class="person">
    <Breadcrumb></Breadcrumb>
    <button @click="fff('setUserInfo')">设置个人信息</button>
    <button @click="fff('message')">消息列表</button>
    <button @click="fff('MedicalReports')">体检报告</button>
    <button @click="fff('healthRecord')">添加健康档案</button>
    <button @click="fff('editRecord')">编辑健康档案</button>
    <button @click="fff('GeneTestReport')">基因检测报告</button>
    <button @click="fff('InformedConsent')">知情同意书</button>
    <button @click="loginOut">退出</button>
    <router-view></router-view>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb/index.vue";

export default {
  name: "person",
  data() {
    return {};
  },
  components: { Breadcrumb },
  methods: {
    fff(c) {
      this.$router.push({ name: c });
    },
    loginOut() {
      //清空数据
      this.$clearAllUserData.call(this);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 500px;
  margin: 50px auto;
}
</style>
