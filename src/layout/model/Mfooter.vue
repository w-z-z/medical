<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 13:42:14
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 18:50:44
 -->
<template>
  <div class="footer">
    <div class="container  footer-head">
      <div class="footer-img">
        <img src="../../assets/images/home/logo_down.png"
          alt />
      </div>
      <div class="foot-content">
        <ul class="canLink">
          <li @click="nextStep('/aboutus')">关于我们</li>
          <li @click="nextStep('/contactus')">联系我们</li>
        </ul>
        <ul class="canLink">
          <li @click="nextStep('/service')">服务条款</li>
          <li @click="nextStep('/privacyStatement')">隐私声明</li>
          <li @click="nextStep('/dataProtocol')">数据保护协议</li>
        </ul>
        <ul>
          <!-- <li>
            服务热线：
            <br />400-123-123
          </li> -->
          <li>
            电子邮箱：
            <br />jzyl@pms.sc.cn
          </li>
        </ul>
      </div>
    </div>
    <p class="tc lh30 c999 fs12 fotterCopy">Copyright 四川精准医疗科技有限责任公司.All rights reserved.蜀ICP备17017847号-1</p>
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
      let routes = this.$router.resolve({ path: `${path}` });
      window.open(routes.href, "_blank");
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>


<style  lang='less' scoped>
.footer {
  .fotterCopy {
    height: 37px;
    line-height: 37px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  .footer-head {
    display: flex;
    padding: 47px;
    .footer-img {
      width: 260px;
      text-align: center;
    }
    .foot-content {
      flex: 1;
      display: flex;
      justify-content: space-around;
      .canLink {
        cursor: pointer;
      }
      li {
        font-size: 12px;
        color: #999;
        line-height: 24px;
      }
    }
  }
}
</style>
