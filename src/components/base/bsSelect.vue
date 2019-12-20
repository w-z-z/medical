
<template>
  <div>
    <el-dialog :visible.sync="show"
               :show-close='false'
               width="310px">
      <span>{{text}}</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      DialogVisible: false
    };
  },
  props: {
    show: {  // 按钮显示文本
      type: Boolean,
      default: false
    },
    text: {  // 按钮显示文本
      type: String,
      default: ""
    },

  },
  computed: {
    //   DialogVisible:function(){
    //       return this.show
    //   }
  },
  methods: {
    confirm: function () {
      this.$emit('confirm', {})
    },
    cancel: function () {
      this.$emit('cancel', {})
    }
  },
};
</script>
<style lang="scss">
// #app{
//     .el-dialog__header{
//     display: none;
// }
// .el-dialog__body{
//     padding: 30px 20px 27px 20px ;
//     font-size:14px;
//     color:rgba(0,0,0,1);
//     line-height:20px;
// }
// .el-dialog__footer{
//     border-top: 1px solid #E9E9E9;
//     padding:  14.5px 20px;
//     text-align: left;
//     .el-button{
//       width: 72px;
//     }
// }
// }
</style>
