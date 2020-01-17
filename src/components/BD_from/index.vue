<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-27 20:32:13
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:08:26
 -->
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 20:27:01
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-02 12:54:41
 -->
<template>
  <el-form :model="formData"
    v-bind="{...renderFromConfig}">
    <slot></slot>
    <slot name="slot-btn">
      <el-form-item>
        <el-button :class="renderFromConfig.okBtn.costomClass"
          @click="submitForm()"
          v-bind="renderFromConfig.okBtn">{{renderFromConfig.okBtn.label}}</el-button>
        <el-button @click="resetForm()"
          v-if="renderFromConfig.noBtn.show"
          v-bind="renderFromConfig.noBtn">{{renderFromConfig.noBtn.label}}</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>

<script>
import { FormConfigClass } from "./class";
export default {
  name: "BD-from",
  components: {},
  props: {
    formData: {
      type: [Object],
      default: null
    },
    fromConfig: {
      type: [Object],
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    renderFromConfig() {
      if (this.fromConfig) {
        return new FormConfigClass(this.fromConfig);
      } else {
        return new FormConfigClass();
      }
    }
  },
  methods: {
    submitForm() {
      let { ref } = this.renderFromConfig;
      this.$refs[ref].validate(valid => {
        if (valid) {
          this.$emit("submitForm");
        } else {
          // console.log("验证不通过");
          return false;
        }
      });
    },
    resetForm() {
      let { ref } = this.renderFromConfig;
      this.$refs[ref].resetFields();
      this.$emit("resetForm");
    }
  },
  created() {
    this.$nextTick(() => {
      // console.log(new FormConfigClass());
      // console.log(this.$refs);
    });
  }
};
</script>

<style scoped>
</style>
