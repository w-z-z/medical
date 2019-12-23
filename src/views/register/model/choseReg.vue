<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 16:37:19
 * @LastEditors  : Seven
 * @LastEditTime : 2019-12-23 16:53:38
 -->
<template>
  <div class="reg">
    <div class="chose-box pd44 mr0auto bgcfff">
      <h1 class="mb30 tc c333 fw400 fs24">注册为会员</h1>
      <div class="item-box">
        <div class="chose-item pd40 tc" @click="choseReg(1)">
          <div class="img-box person-img mr0auto"></div>
          <p class="user-tag mt25 fw400 fs26 c333">个人用户</p>
          <p
            class="user-tag-detail mt46 tcl c999 lh20"
          >为您提供私信与留言咨询，在线建立健康档案、在线查询及下载体检报告、报告分析、健康管理等贴心服务。</p>
        </div>
        <div class="chose-item pd40 tc" @click="choseReg(2)">
          <div class="img-box company-img mr0auto"></div>
          <p class="user-tag mt25 fw400 fs26 c333">企业用户</p>
          <p
            class="user-tag-detail mt46 tcl c999 lh20"
          >整合员工健康问卷数据、个体基因检测数据、历年体检数据等多维度数据，运用AI技术和大数据分析、挖掘企业员工潜在疾病分线，促进员工体质健康水平。让基因科技为企业赋能。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    choseReg(index) {
      if (index === 1) {
        this.$router.push("/register/person");
      } else {
        this.$router.push("/register/company");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.reg {
  padding: 162px 0 186px;
  .chose-box {
    width: 1087px;
    height: 582px;
    box-shadow: 0px 3px 30px 0px rgba(54, 176, 185, 0.08);
    border-radius: 25px;
    .item-box {
      display: flex;
      justify-content: space-between;
      .chose-item {
        width: 492px;
        height: 400px;
        border-radius: 45px;
        .img-box {
          width: 94px;
          height: 98px;
          &.person-img {
            background: url("../../../assets/images/login/person_no_check.png")
              center no-repeat;
          }
          &.company-img {
            background: url("../../../assets/images/login/company_no_check.png")
              center no-repeat;
          }
        }
        &:hover {
          background-color: #88e6d6;
          p {
            color: #fff;
          }
          .person-img {
            background: url("../../../assets/images/login/person_check.png") center
              no-repeat;
          }
          .company-img {
            background: url("../../../assets/images/login/company_check.png")
              center no-repeat;
          }
        }
      }
    }
  }
}
</style>