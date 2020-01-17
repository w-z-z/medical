<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-21 22:35:28
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 19:27:42
 -->
<template>
  <div class="personHome">
    <!-- 个人首页路由导航 -->
    <el-row class="navBox"
      :gutter="20">
      <el-col :key="index"
        v-for=" (item,index) in  routerLink "
        :span="12">
        <div @click="$router.push({name:item.router})"
          class="navLink">
          <p class="Linkname">{{item.name}}</p>
          <p class="Linkdesc">{{item.desc}}</p>
          <div class="Linkimg">
            <img :src="item.img"
              alt />
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 产品swiper -->
    <div class="ProductSwiper">
      <p class="ProductTitle">热门产品</p>
      <productSwiper @click="toDetail"
        :productData="productData"></productSwiper>
    </div>
  </div>
</template>
<script>
import productSwiper from "@/views/product/model/index";
import logoImg from "../../assets/productTest.png";
export default {
  name: "person",
  data() {
    return {
      productData: [
        // {
        //   imgUrl: logoImg,
        //   id: 1,
        //   title: "成人健康风险基因检测",
        //   desc:
        //     "对人体疾病和营养相关的上千个遗传位点进行检测，覆盖上百种疾病的风险评估，做到早预..."
        // },
        // {
        //   imgUrl: logoImg,
        //   id: 2,
        //   title: "成人健康风险基因检测",
        //   desc:
        //     "对人体疾病和营养相关的上千个遗传位点进行检测，覆盖上百种疾病的风险评估，做到早预..."
        // },
        // {
        //   imgUrl: logoImg,
        //   id: 3,
        //   title: "成人健康风险基因检测",
        //   desc:
        //     "对人体疾病和营养相关的上千个遗传位点进行检测，覆盖上百种疾病的风险评估，做到早预..."
        // },
        // {
        //   imgUrl: logoImg,
        //   id: 4,
        //   title: "成人健康风险基因检测",
        //   desc:
        //     "对人体疾病和营养相关的上千个遗传位点进行检测，覆盖上百种疾病的风险评估，做到早预..."
        // }
      ],
      routerLink: [
        {
          name: "健康档案",
          desc: "不可缺少的健康管理依据",
          router: "healthRecord",
          img: require("@/assets/images/person/routerIcon1.png")
        },
        {
          name: "检测报告",
          desc: "报告解读  处方干预",
          router: "GeneTestReport",
          img: require("@/assets/images/person/routerIcon2.png")
        },
        {
          name: "知情同意书",
          desc: "了解签署信息",
          router: "InformedConsent",
          img: require("@/assets/images/person/routerIcon3.png")
        },
        {
          name: "体检报告",
          router: "MedicalReports",
          desc: "自主上传  指标分析",
          img: require("@/assets/images/person/routerIcon4.png")
        }
      ]
    };
  },
  components: { productSwiper },
  methods: {
    toDetail() {
      this.$router.push({
        path: "/productDetail/10"
      });
    },
    // 获取产品
    getProductLists() {
      let params = {
        page_size: 10,
        page_no: 1
      };
      this.$api["GetProductList"](params)
        .then(res => {
          this.productData = res.data;
          // console.log(res);
        })
        .catch(msg => {
          this.$showMsg(msg);
        });
    }
  },
  created() {
    this.getProductLists();
  }
};
</script>

<style lang="scss" scoped>
.personHome {
  .navBox {
    .navLink {
      position: relative;
      width: 458px;
      height: 133px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      padding: 30px 26px;
      margin-bottom: 30px;
      .Linkname {
        font-size: 18px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 19px;
      }
      .Linkdesc {
        font-size: 14px;
        color: rgba(153, 153, 153, 1);
      }
      .Linkimg {
        position: absolute;
        right: 50px;
        top: 30px;
        img {
          width: 28px;
        }
      }
    }
  }
}
.ProductSwiper {
  .ProductTitle {
    font-size: 18px;
    color: rgba(51, 51, 51, 1);
    padding-bottom: 20px;
  }
}
</style>
