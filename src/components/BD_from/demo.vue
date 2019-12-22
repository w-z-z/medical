<template>
  <div>
    <BDfrom @submitForm="submitForm"
      @resetForm="resetForm"
      ref="ruleForm"
      :fromConfig="fromConfig"
      :formData="formData">
      <el-form-item label="活动名称"
        prop="user">
        <el-input v-model="formData.user"></el-input>
      </el-form-item>
      <el-form-item label="区域"
        prop="region">
        <el-input v-model="formData.region"></el-input>
      </el-form-item>
      <!-- <el-form-item slot="slot-btn">
        <el-button style="width: 100px"
          @click="$refs['ruleForm'].resetForm()">重置2</el-button>
        <el-button type="primary"
          style="width: 100px"
          @click="$refs['ruleForm'].submitForm()">立即创建2</el-button>
      </el-form-item> -->
    </BDfrom>
  </div>
</template>

<script>
import BDfrom from "./index";
export default {
  name: "BD-from",
  components: { BDfrom },
  data() {
    return {
      // 表单数据对象
      formData: {
        user: "",
        region: ""
      },
      // 表单基础参数
      fromConfig: {
        // 表单验证规则
        rules: {
          user: [
            { required: true, message: "请输入活动名称", trigger: "blur" }
          ],
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ]
        }
        // // 行内表单模式【false/true 默认false】
        // inline: false,
        // // 表单ref【可传，可不传，默认ruleForm】
        // ref: "ruleForm",
        // // 表单域标签的宽度【默认80px】
        // labelWidth: "100px",
        // // 用于控制该表单内组件的尺寸【default / medium / small / mini】
        // size: "mini",
        // // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width【right / left / top】
        // labelPosition: "right",
        // // 确定按钮的基础配置【参数参考element的el-button组件】
        // okBtn: { label: "确定111" },
        // // 取消按钮的基础配置【参数参考element的el-button组件】
        // noBtn: { label: "取消222" }
      }
    };
  },
  computed: {},
  methods: {
    // 确定回调事件
    submitForm(formName) {
      console.log("确定回调");
    },
    // 重置回调事件
    resetForm(formName) {
      console.log("重置回调");
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped>
</style>
