<template>
  <div id="order_page">
    <div class="title_name">我是order1</div>
  </div>
</template>

<script>
export default {
  name: 'order_page',
  methods: {}
}
</script>

<style lang="less">
body {
  font-family: "Source Sans Pro", sans-serif;
}

.title_name {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}
</style>
