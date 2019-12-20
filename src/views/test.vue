<template>
  <div id="home_page">
    <div class="title_name">我是test11</div>
    <TitleContainer></TitleContainer>
    <br>
    <SearchContainer>
      <div>dsadsa</div>
    </SearchContainer>
  </div>
</template>

<script>
import TitleContainer from '@/components/Container/TitleContainer'
import SearchContainer from '@/components/Container/SearchContainer'
export default {
  name: 'home_page',
  components: {TitleContainer, SearchContainer},
  methods: {
  }
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
