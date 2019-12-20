<template>
  <div class="bsExplain">
    <span class="bsExplainIcon">
      <img :src="icon"
           alt="">
    </span>
    <div class="bsExplaincontent">
      {{explain}}
    </div>
  </div>
</template>

<script>
// import { hasPermission } from '@/permission/index.js'
export default {
  name: 'BsExplain',
  props: {
    explain: {  // 按钮显示文本
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    line: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },

}
</script>
<style lang="scss" scoped>
// .bsExplain{
//       width: 100%;
//       padding: 4px 0;
//       margin: 0;
//       box-sizing: border-box;
//       position: relative;
//       background-color: #fff;
//       overflow: hidden;
//       opacity: 1;
//       display: flex;
//       align-items: center;
//       transition: opacity .2s;
//     .bsExplainIcon{
//         display: block;
//         padding-right: 10px;
//         min-width: 12px;
//         line-height:14px;
//         img{
//             width: 12px;
//             height: 14px;
//         }
//     }
//    .bsExplaincontent{
//       display: table-cell;
//       color: $explainColor;
//       font-size:12px;
//       line-height:17px;
//    }
// }
</style>
