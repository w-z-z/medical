<template>
  <el-button :style="{'min-width':minwidth}"
             :class='[ "bs--type-"+bstype ,{"bs--active":active},{"bs--plain":bsplain}]'
             :disabled="disabled"
             :size='size'
             :type='type'
             :plain="plain"
             :round="round"
             v-if="hasPerms(perms)"
             @click="handleClick">
    {{label}}
  </el-button>
</template>

<script>
// import { hasPermission } from '@/permission/index.js'
export default {
  name: 'BsButton',
  props: {
    label: {  // 按钮显示文本
      type: String,
      default: 'Button'
    },
    minwidth: {
      type: String,
      default: null
    },
    bstype: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "defult"
    },
    type: {
      type: String,
      default: "defult"
    },
    disabled: {  // 按钮是否禁用
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {//是否朴素 无背景色
      type: Boolean,
      default: false
    },
    bsplain: { //自定义的朴素颜色
      type: Boolean,
      default: false
    },
    perms: {  // 按钮权限标识，外部使用者传入
      type: String,
      default: null
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
// 默认的样式的hover等
// @mixin hoverStyle($color: $primaryColor) {
//   &:hover,
//   &:active {
//     border-color: $color;
//     color: white;
//     background-color: $color;
//   }
// }
// $buttonList: #808080 #8d43ff #66c655 #ffbc00 #808080 #f05252;
// $classList: default primary success info warning danger;

// $each $class in $classList {
//   $i:index($classList, $class) .el-button--#{$class} {
//     @include hoverStyle(nth($buttonList, $i));
//   }
// }

// //虚化背景 的hover样式
//   @mixin  plainHoverStyle($color:$primaryColor){
//    &:hover,&:active{
//      border-color: $color;
//      color:  white;
//      background-color: fade($color,50%);
//     }
//  }
//  @mixin  plainColor($color:$primaryColor){
//     background-color: fade($color,50%);
//    .plainHoverStyle($color)
//  }
//  @mixin  sameColo($color,$borderColor,$bgColor){
//     border-color: $borderColor;
//     background-color: $bgColor;
//     color: $color;
//     &:hover,&:active{
//       border-color: $borderColor !important;
//       background-color:$bgColor !important;
//       color:$color !important;
//     }
//  }
// .el-button{
//   //黑色的导行按钮
//   &.bs--type-black{
//       @include sameColo($highLightTextColor,white,white);
//     &.bs--active{
//       @include sameColo(white,black,black);
//     }
//   }
//    //默认
//   &.el-button--defult{
//      &:hover,&:active{
//      border-color:$buttonBoderColor;
//      color: $primaryTextColor;
//      background-color: white;
//     }
//   }
//   //背景虚化 模式
//   &.el-button--dark{
//      @include sameColo(white,$darkTextColor,$darkTextColor);
//     &.bs--plain{
//         @include plainColor($darkTextColor);
//     }
//   }
//   &.el-button--primary{
//      @include hoverStyle();
//     &.bs--plain{
//         @include plainColor();
//     }
//   }
//    &.el-button--success{
//      @include hoverStyle($successColor);
//     &.bs--plain{
//         @include plainColor($successColor);
//     }
//   }
//    &.el-button--info{
//     &:hover,&:active{
//         color: #000;
//         background-color: #E3EAEF;
//         border-color: #E3EAEF;
//     }
//     &.bs--plain{
//        @include plainColor($infoColor);
//     }
//   }
//    &.el-button--warning{
//       @include hoverStyle($warningColor);
//     &.bs--plain{
//         @include plainColor($warningColor);
//     }
//   }
// }
</style>
