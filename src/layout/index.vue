<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:18:18
 -->
<template>
  <div>
    <Mheader></Mheader>
    <!-- {{!getCurrentRouterType}} -->
    <!-- 内容 -->
    <section id="content">
      <router-view></router-view>
    </section>
    <Mfooter v-if="!getCurrentRouterType"></Mfooter>
  </div>
</template>

<script>
import Mheader from "./model/Mheader";
import Mfooter from "./model/Mfooter";
import { mapGetters } from "vuex";
export default {
  name: "",
  components: {
    Mfooter,
    Mheader
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCurrentRouterType"])
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style lang="less">
#content {
  min-height: 773px;
  background-color: #f8f8f8;
  padding-bottom: 40px;
  box-sizing: border-box;
}
</style> 
