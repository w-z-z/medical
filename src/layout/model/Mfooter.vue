<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 14:26:41
 -->
<template>
  <div class="footer">
    <div class="container ptb55 footer-head">
      <div class="footer-img">
        <img src="../../assets/images/home/logo_down.png" alt />
      </div>
      <div class="foot-content">
        <ul>
          <li @click="nextStep('/aboutus')">关于我们</li>
          <li @click="nextStep('/contactus')">联系我们</li>
        </ul>
        <ul>
          <li @click="nextStep('/service')">服务条款</li>
          <li @click="nextStep('/service')">隐私声明</li>
          <li @click="nextStep('/service')">数据保护协议</li>
        </ul>
        <ul>
          <li>
            服务热线：
            <br />400-123-123
          </li>
          <li>
            电子邮箱：
            <br />service@jyjk.com
          </li>
        </ul>
      </div>
    </div>
    <p
      class="tc lh30 c999 fs12"
      style="border-top:1px solid #999;"
    >Copyright 四川精准医疗科技有限责任公司.All rights reserved.川ICP备88888888号-8</p>
  </div>
</template>

<script>
export default {
  name: "Mfooter",
  data() {
    return {};
  },
  computed: {},
  methods: {
    nextStep(path) {
      this.$router.push(`${path}`);
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>


<style  lang='less' scoped>
.footer {
  .footer-head {
    display: flex;
    .footer-img {
      width: 260px;
      text-align: center;
    }
    .foot-content {
      flex: 1;
      display: flex;
      justify-content: space-around;

      li {
        font-size: 12px;
        color: #999;
        line-height: 24px;
      }
    }
  }
}
</style>
