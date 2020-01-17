<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-09 13:44:18
 -->
<template>
  <div class="reg">
    <div class="container regBoxsa">
      <router-view></router-view>
    </div>
    <p class="elFooter">&copy; 四川精准医疗科技有限责任公司</p>
  </div>
</template>
<script>
import Mheader from "@/layout/model/Mheader.vue";
export default {
  name: "register",
  components: {
    Mheader
  }
};
</script>
<style lang="scss" scoped>
.reg {
  position: relative;
  padding: 122px 0 214px 0;
  .elFooter {
    text-align: center;
    font-size: 12px;
    color: #999999;
    position: absolute;
    bottom: 56px;
    width: 100%;
    left: 0;
  }
}
</style>
