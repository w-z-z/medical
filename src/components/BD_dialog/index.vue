<template>
  <el-dialog v-bind="{...renderDialogParam}"
    :visible.sync="dialogParam.visible">
    <slot></slot>
    <slot name="footer">
      <div slot="footer"
        class="dialog-footer"
        :style="{'text-align': renderDialogParam.center ? renderDialogParam.center : renderDialogParam.align}">
        <el-button v-show="renderDialogParam.noBtn.show"
          @click="noBtn"
          v-bind="renderDialogParam.noBtn"
          :size="renderDialogParam.btnSize">{{renderDialogParam.noBtn.label}}</el-button>
        <el-button v-show="renderDialogParam.okBtn.show"
          @click="okBtn"
          v-bind="renderDialogParam.okBtn"
          :size="renderDialogParam.btnSize">{{renderDialogParam.okBtn.label}}</el-button>
      </div>
    </slot>
  </el-dialog>
</template>

<script>
import { DialogConfigClass, BtnConfigClass } from "./class";
export default {
  name: "BD-dialog",
  components: {},
  props: {
    dialogParam: {
      type: [Object],
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    renderDialogParam() {
      if (this.dialogParam) {
        let par = JSON.parse(JSON.stringify(this.dialogParam));
        if (par.okBtn) {
          par.okBtn = new BtnConfigClass(par.okBtn);
        }
        if (par.noBtn) {
          par.noBtn = new BtnConfigClass(
            Object.assign({ label: "取 消", type: "default" }, par.noBtn)
          );
        }
        return new DialogConfigClass(par);
      } else {
        return new DialogConfigClass();
      }
    }
  },
  methods: {
    okBtn() {
      this.$emit("okBtn");
    },
    noBtn() {
      this.$emit("noBtn");
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped>
</style>
