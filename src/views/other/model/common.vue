<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-28 11:04:25
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-09 14:55:36
 -->
<template>
  <div id="service">
    <div class="company-info">
      <div class="company">
      </div>
      <div v-loading='loading'
        class="content">
        <h1 class="tc fs36 mb50">{{serviceData.item_name}}</h1>
        <p class="content-info"
          v-html='serviceData.content'></p>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      serviceData: {
        content: "",
        item_name: ""
      }
    };
  },
  props: {
    api: {
      type: String
    }
  },
  methods: {
    getData() {
      this.loading = true;
      let api = this.api;
      this.$api[api]()
        .then(res => {
          this.serviceData = res;
          this.loading = false;
        })
        .catch(msg => {
          this.loading = false;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
#service {
  background: #f8f8f8;
  padding-bottom: 80px;
  .company-info {
    .company {
      width: 100%;
      height: 798px;
      background-image: url("../../../assets/images/other/conapny.png");
      background-position: center;
      background-size: cover;
      background-repeat: repeat;
    }
    .content {
      max-width: 1200px;
      width: 90%;
      min-height: 600px;
      margin: 0 auto;
      margin-top: -300px;
      background: rgba($color: #fff, $alpha: 0.9);
      padding: 70px;
    }
  }
}
</style>