<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 16:46:37
 -->
<template>
  <div class="reg">
    <div class="container-fluid">
      <div class="container">
        <router-view></router-view>
      </div>
      <el-footer>
        <p>&copy; 四川精准医疗科技有限责任公司</p>
      </el-footer>
    </div>
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
.el-footer {
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #999999;
}
</style>
