<!--
 * @Description: 产品组件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 16:01:56
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-07 17:55:52
 -->
<template>
  <div class="productSwiper">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in productData"
          :key="index">
          <div @click="changeRouter(item.product_id)"
            class="productBox">
            <img class="productImg"
              :src="item.thumbnail" />
            <div class="productInfo">
              <p class="title">{{item.product_name}}</p>
              <p class="desc">{{item.product_desc}}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "productSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        autoHeight: true,
        loop: true,
        autoplay: 1000,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        speed: 1000,
        delay: 1000
      }
    };
  },
  props: {
    productData: {
      type: [Array],
      default: null
    }
  },
  components: { swiperSlide, swiper },
  methods: {
    changeRouter(id) {
      this.$router.push({
        path: "/productDetail/" + id
      });
    }
  }
};
</script>
<style lang='less' scoped>
.productSwiper {
  .swiper-slide {
    .productBox {
      background-color: white;
      .productImg {
        height: 180px;
        width: 100%;
      }
      .productInfo {
        padding: 28px 24px;
        .title {
          font-size: 18px;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .desc {
          font-size: 14px;
          color: rgba(153, 153, 153, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          min-height: 75px;
          line-height: 25px;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
.swiper-pagination-bullet-active {
  background-color: salmon;
}
</style>
<style lang='less'>
//更改的全局样式
.productSwiper {
  .swiper-slide {
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
  }
  .swiper-pagination {
    position: relative;
    margin: 13px 0;
  }
  .swiper-pagination-bullet {
    margin: 0 6px;
  }
  .swiper-pagination-bullet-active {
    background: #78d0c1;
  }
}
</style>