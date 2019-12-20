<template>
  <div class="search_c">
    <div class="search_c_view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
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
.search_c {
  padding: 0 20px;
  position: relative;
  .search_c_view {
    min-height: 65px;
  }
  ::after {
    content: "";
    width: 2px;
    height: 10px;
    background: $primaryColor;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    left: 0;
  }
}
</style>
