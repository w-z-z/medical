<template>
  <div class="setUserInfo">
    setUserInfo
    <div style="height:200px;width:200px">
      <chaer :chartData='chartData'></chaer>
    </div>
  </div>
</template>
<script>
import chaer from "@/components/Echart/bar.vue";
export default {
  name: "setUserInfo",
  data() {
    return {
      chartData: {}
    };
  },
  components: {
    chaer
  }
};
</script>
<style lang="scss" scoped>
.setUserInfo {
  width: 500px;
  margin: 50px auto;
}
</style>
