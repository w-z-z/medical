<template>
  <div>
    <el-button @click="dialogParam.visible = true">点击弹出窗口</el-button>
    {{dialogParam}}
    <BDdialog :dialogParam="dialogParam"
      @okBtn="okBtn"
      @noBtn="noBtn">
      <BD-from></BD-from>
      <!-- <div slot="footer">
        <el-button @click="okBtn">确 定</el-button>
        <el-button @click="noBtn">取 消</el-button>
      </div> -->
    </BDdialog>
  </div>
</template>

<script>
import BDdialog from "./index";
export default {
  name: "BD-dialog",
  components: { BDdialog },
  data() {
    return {
      /**
       * visible 是否显示 Dialog 【boolean】
       * title Dialog 的标题 【string】
       * width Dialog 的宽度 【string -- 50%】
       * fullscreen 是否为全屏 Dialog 【boolean】
       * top Dialog CSS 中的 margin-top 值【string -- 15vh】
       * modal 是否需要遮罩层 【boolean】
       * lockScroll 是否在 Dialog 出现时将 body 滚动锁定【boolean】
       * customClass Dialog 的自定义类名
       * closeOnClickModal 是否可以通过点击 modal 关闭 Dialog
       * closeOnPressEscape 是否可以通过按下 ESC 关闭 Dialog
       * showClose 是否显示关闭按钮
       * center 是否对头部和底部采用居中布局
       * destroyOnClose 关闭时销毁 Dialog 中的元素
       * okBtn，noBtn 按钮基础配置
       * beforeClose 关闭前的回调，会暂停 Dialog 的关闭
       */
      dialogParam: {
        visible: false
        // title: "提 示",
        // width: "30%",
        // btnSize: "mini",
        // align: 'left',
        // fullscreen: false,
        // top: "20vh",
        // modal: true,
        // lockScroll: true,
        // customClass: '',
        // closeOnClickModal: false,
        // closeOnPressEscape: false,
        // showClose: true,
        // center: false,
        // destroyOnClose: true
        // okBtn: {
        //   label: '确 定',
        //   type: 'primary',
        //   show: true,
        //   plain: false,
        //   round: false,
        //   circle: false,
        //   loading: false,
        //   disabled: false,
        //   icon = '',
        // },
        // noBtn: {},
        // beforeClose: done => {
        //   done();
        // }
      }
    };
  },
  computed: {},
  methods: {
    noBtn() {
      this.dialogParam.visible = false;
    },
    okBtn() {
      this.dialogParam.visible = false;
    }
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped>
</style>
