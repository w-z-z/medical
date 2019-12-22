<template>
  <div :class='["bsBlock"]'>

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
  },
  data () {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.bsBlock {
  background: white;
  padding: 15px 20px;
  margin: 10px;
}
</style>
