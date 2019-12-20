<template>
  <div class="player_stratum">
    <div class="left">{{ title }}</div>
    <div class="right">
      <swiper :options="swiperOption">
        <swiper-slide class="slide1"><el-button size="small" >小型dsadsadsa按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
        <swiper-slide><el-button size="small" >小型按钮</el-button></swiper-slide>
      </swiper>
    </div>
    <div class="btn">
      <span class="garden btn_prev"><i class="fa fa-angle-left"></i></span>
      <span class="garden btn_next"><i class="fa fa-angle-right"></i></span>
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
      default: '玩家上级'
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
          nextEl: '.btn_next',
          prevEl: '.btn_prev'
        }
      }
    }
  },
  computed: {},
  methods: {},
  created () {},
  mounted () {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.player_stratum {
  height: 60px;
  background: #eee;
  padding: 0 20px;
  display: flex;
  .left{
      font-size: $asideFont;
      color: $darkTextColor;
      font-weight: $fontWeight500;
      display: flex;
      align-items: center;
      position: relative;
      padding-right: 20px;
    }
    .left::after{
      content: '';
      width: 1px;
      height: 15px;
      background: $explainColor;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -7.5px
    }
    .right{
      flex: 1;
      overflow: hidden;
      position: relative;
      padding: 0 20px;
    }
    .btn{
      display: flex;
      align-items: center;
      .garden{
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: $primaryColor;
        display: inline-block;
        text-align: center;
        color: white;
        line-height: 20px;
        outline: none;
      }
      .garden:last-child{
        margin-left: 5px;
      }
      .swiper-button-disabled{
        background-color: #D8D8D8;
      }
    }
  }
  .swiper-slide{
    width: auto;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .swiper-slide {
    height: 60px;
  }
</style>
