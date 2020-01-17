<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 10:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 14:43:42
 -->
<template>
  <div v-loading='loading'
    class="productDetail">
    <section class="baseInfo">
      <div class="BreadcrumbBox">
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="inside">
        <div class="swiperBox">
          <div class="wrapper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in Info.Slide"
                :key="index">
                <img class="productImg"
                  :src='item.file_url' />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="otherInfo">
          <!-- <p class="titleImg">
            <img src="../../assets/images/product/title.png"
              alt="">
          </p> -->
          <div class="title">
            {{Info.product_name}}
          </div>
          <div class="desc">
            {{Info.product_desc}}
          </div>
        </div>
      </div>
    </section>
    <section class="detail">
      <div v-html="Info.content">

      </div>
    </section>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Breadcrumb from "@/components/Breadcrumb/index.vue";

export default {
  name: "productDetail",
  components: { swiperSlide, swiper, Breadcrumb },
  data() {
    return {
      Info: {},
      loading: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        loop: true,
        height: 335,
        autoplay: 1000,
        speed: 1000,
        delay: 1000
      }
    };
  },
  methods: {
    getInfo(id) {
      this.loading = true;
      this.$api["GetProductDetail"]({
        product_id: id
      })
        .then(res => {
          this.Info = res;
          this.loading = false;
          this.$backTop();
        })
        .catch(err => {
          this.$showMsg(err);
          this.loading = false;
        });
    }
  },
  created() {
    this.getInfo(this.$route.params.proId);
  }
};
</script>
<style  lang='less'   scoped>
.productDetail {
  padding-bottom: 50px;
  .baseInfo {
    background-color: #f8f8f8;
    .BreadcrumbBox {
      margin: 0 auto;
      width: 1200px;
    }
    .inside {
      margin: 0 auto;
      width: 1200px;
      padding-bottom: 100px;
      padding-top: 20px;
      display: grid;
      grid-template-columns: repeat(2, 50%);
      .wrapper {
        img {
          width: 596px;
          height: 335px;
        }
      }
      .otherInfo {
        padding: 5px 34px;
        .titleImg {
          img {
            width: 218px;
          }
          margin-bottom: 10px;
        }
        .title {
          height: 24px;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: rgba(59, 62, 67, 1);
          line-height: 24px;
          margin-bottom: 54px;
        }
        .desc {
          font-size: 14px;
          font-family: SimSun;
          width: 570px;
          font-weight: 400;
          color: rgba(59, 62, 67, 1);
          line-height: 24px;
        }
      }
    }
  }
  .detail {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 30px;
    background-color: white;
  }
}
</style>

