<template>
  <span :class='["bslink", "bs-link--"+type]'
        v-if="hasPerms(perms)"
        @click="handleClick">
    {{label}}
  </span>
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
    type: {  // 按钮类型
      type: String,
      default: "default"
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
//  //调整按钮颜色--主要（带背景颜色）
//  .linkType($color:$cinfoColor){
//    color:$ccolor;
// }
// //基础样式
// .bslink {
//   display: inline-flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   vertical-align: middle;
//   position: relative;
//   text-decoration: none;
//   outline: none;
//   cursor: pointer;
//   padding: 0;
//   font-size: 14px;
//   font-weight: 500;
//   .linkType();
// }
// .bs-link--primary{
//     .linkType($cprimaryColor);
// }
// .bs-link--success{
//     .linkType($csuccessColor);
// }
</style>
