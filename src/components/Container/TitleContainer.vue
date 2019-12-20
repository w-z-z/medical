<template>
  <div class="title_c">
    <div class="title_c_view">
      <div class="title_c_title">{{title}}</div>
      <div class="title_c_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    title: {
      type: [String],
      default: 'Title'
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.title_c {
  padding: 0 20px;
  .title_c_view {
    min-height: 65px;
    border-bottom: 1px solid $tableBoderColor;
    display: flex;
    .title_c_title {
      display: flex;
      align-items: center;
      color: $highLightTextColor;
      font-size: $asideFont;
      font-weight: $fontWeight500;
    }
    .title_c_content {
      flex: 1;
    }
  }
}
</style>
