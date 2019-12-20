<template>
  <div :class='["bsCell"]'>
    <span :style="{'width':width,'line-height':lineHeight}">{{label}}:</span>
    <div class="bsCellContent"
         :style="{'margin-left':width,'line-height':lineHeight}">
      {{labelConent}}
      <slot></slot>
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

    width: {
      type: String,
      default: '120px',
    },
    lineHeight: {
      type: String,
      default: '30px',
    },
    labelConent: {
      type: String,
      default: "",
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
//  .bsCell{
//     margin-bottom: 15px;
//     clear: both;
//      span{
//         float: left;
//         display: block;
//         padding:0 15px;
//         font-weight: 400;
//         text-align: right;
//      }
//      .bsCellContent{
//      }
//  }
</style>
