<template>
  <div :class='["bstableSelect"]'>
    <span :style="{'width':lablewidth,}">{{label}}:</span>
    <div :class="['bstableContent','bs-InputType-'+inputType ]"
         :style="{'margin-left':lablewidth,}">
      {{labelConent}}
      <div class="InputList">
        <slot name='firstInput'></slot>
      </div>
      <div class="InputList">
        <slot name='sconedInput'></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { hasPermission } from '@/permission/index.js'
export default {
  name: 'BsCell',
  props: {
    label: {  // 按钮显示文本
      type: String,
      default: "",
    },
    lablewidth: {
      type: String,
      default: '70px',
    },
    labelConent: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "default",
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick: function () {
      // 按钮操作处理函数
      this.$emit('click', {})
    },
    hasPerms: function (perms) {
      // 根据权限标识和外部指示状态进行权限判断
      if (perms == "true") {
        return true
      }
      else {
        return true
        // return hasPermission(perms)
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
//  .bstableSelect{
//     margin-bottom: 15px;
//     clear: both;
//     margin-right: 20px;
//     display: inline-block;
//     line-height: 30px;
//      span{
//         float: left;
//         display: block;
//         padding-right: 10px;
//         font-weight: 400;
//         text-align: left;
//         color: $placeholderColor;
//      }
//      .bstableContent{
//          .InputList{
//              display: inline-block;
//              margin-right: 4px;
//          }
//          &.bs-InputType-default{
//           .InputList{
//              max-width: 120px;
//            }
//          }
//          &.bs-InputType-mini{
//            .InputList{
//              max-width: 80px;
//            }
//          }
//      }
//  }
</style>
