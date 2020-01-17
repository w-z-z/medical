<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-28 11:16:45
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-09 13:07:26
 -->
<template>
  <div>
    <webSet api="About">
      <div class="otherInfo">
        <el-row :gutter="20">
          <el-col v-for="(item,index) in person "
            :key='index'
            :span="6"
            :xs='{span: 24}'
            :sm='{span: 12}'
            :md='{span: 12}'
            :lg='{span: 6}'
            :xl='{span: 6}'>
            <div :style="'background-image:url('+item.BackImg+')'"
              class="pseronIteM">
              <p class="name">{{item.name}}</p>
              <p class="title">{{item.title}}</p>
              <div class="desc"
                v-html="item.desc">

              </div>
            </div>
          </el-col>
        </el-row>

      </div>
    </webSet>
  </div>
</template>

<script>
import webSet from "./model/common";
export default {
  components: {
    webSet
  },
  data() {
    return {
      person: [
        {
          name: "陈昌岷",
          title: "首席科学家",
          desc:
            "<p style='margin-bottom:10px'>大利亚昆士兰大学博士，哈佛医学院博士后，前四川省肿瘤医院肿瘤研究所副所长和基础研究部主任；美国哈佛医学院Dana-Faber肿瘤中心科学家。美国南卡Hollings肿瘤中心研究助理教授。</p><p style='margin-bottom:10px'>主要从事肿瘤细胞中与增值和抗凋亡相关信号通路、肿瘤靶标坚定及肿瘤细胞耐受放化疗和靶向药物机理、肿瘤早期诊断和生物制药的研发</p>",
          BackImg: require("../../assets/images/other/personBack01.png")
        },
        {
          name: "董鑫",
          title: "实验室负责人",
          desc:
            "<p style='margin-bottom:10px'>毕业于法国艾克斯马赛大学医学院，人类传染病学、病理学、遗传学博士，从事医学检测领域于遗传咨询工作7年，现为成都市特聘专家、成都市人才计划专家、中国遗传学会成员 </p>",
          BackImg: require("../../assets/images/other/personBack02.png")
        },
        {
          name: "谢跃",
          title: "肿瘤中心科学家",
          desc:
            "<p style='margin-bottom:10px'>澳大利亚昆士兰大学生化博士，哈佛医学院博士后，美国哈佛医学院讲师，美国哈佛医学院Dana-Faber肿瘤中心科学家，lex Oncology药物研发公司高级科学家。Bio-Rad和Aglient Technoloies,Inc公司技术支持。</p> <p style='margin-bottom:10px'>  主要从事巨噬细胞特异性基因表达的调控、肿瘤细胞耐受放疗的机理的研究、乳腺癌靶向药物的研发。在基因表达分析、免疫细胞的功能和细胞代谢领域具有丰富的理论知识和研究经验</p>",
          BackImg: require("../../assets/images/other/personBack03.png")
        },
        {
          name: "刘强",
          title: "细胞移植专家",
          desc:
            "<p style='margin-bottom:10px'>德国图宾根大学生化博士，哈佛医学院博士后，多伦多大学生物医学工程研究所研究员，加拿大生物科技首席科学家。北京华横汉方-森维尔干细胞研究中心负责人。国际干细胞研究会会员。从事生物医学工程、分子细胞学、器官克隆、干细胞、免疫学、生物化学和器官移植等研究工作。 </p><p style='margin-bottom:10px'> 对组织再生和组织工程学，糖尿病的生物化学，心脏移植及器官移植后的免疫抑制，基因治疗学，胚胎干细胞生物学及其衍生、分化技术和应用，成人干细胞生物学及应用技术，细胞移植学等不同领域的研究工作具有丰富的知识和经验</p>",
          BackImg: require("../../assets/images/other/personBack04.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.otherInfo {
  max-width: 1200px;
  width: 100%;
  margin: 50px auto;
  margin-bottom: 0;
  .pseronIteM {
    background-size: 100% 100%;
    padding: 37px 33px;
    font-family: Microsoft YaHei;
    min-height: 481px;
    font-weight: 400;
    margin-bottom: 20px;
    p.name {
      font-size: 30px;
      color: rgba(102, 102, 102, 1);
    }
    p.title {
      font-size: 24px;
      color: rgba(153, 153, 153, 1);
    }
    .desc {
      padding-top: 29px;
      font-size: 12px;
      line-height: 20px;
      color: rgba(102, 102, 102, 1);
    }
  }
}
</style>