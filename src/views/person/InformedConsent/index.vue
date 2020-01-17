<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 20:27:01
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-13 15:07:25
 -->
<template>
  <div id="InformedConsent">
    <!-- 搜索表单 -->
    <div class="agree-top bgcfff mb30">
      <BDfrom @submitForm="submitForm"
        @resetForm="resetForm"
        ref="serchFrom"
        :fromConfig="fromConfig"
        :formData="apiData['apiParam']">
        <el-form-item style="width:166px"
          label>
          <el-date-picker v-model="apiData['apiParam'].sign_time"
            placeholder="签署日期"
            style="width: 100%;"
            value-format="timestamp"></el-date-picker>
        </el-form-item>
      </BDfrom>
    </div>
    <!-- 搜索结果 -->
    <div class="argee-content bgcfff">
      <h2 class="c666 fs16">知情同意书列表</h2>
      <div class="resultForm">
        <BDtable ref="serchFrom"
          :tableHead="tableHead"
          :tableConfig="tableConfig"
          @sizeChange="sizeChange"
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"></BDtable>
      </div>
    </div>
    <!-- 弹窗 -->
    <el-image id="imgBox"
      style=" top:-900px; left:-900px; position:fixed;width: 30px; height: 30px;"
      :src="argeeImg[0]"
      :preview-src-list="argeeImg"></el-image>
    <!-- <BDdialog :dialogParam="dialogParam">
      <h1 class="fs30 tc mb50">查看我签署的知情同意书</h1>
      <div class="argee-Img tc">
        <el-image
          style="width: 360px; height: 530px;"
          :src="argeeImg[0]"
          :preview-src-list="argeeImg"
        ></el-image>
      </div>
    </BDdialog>-->
  </div>
</template>

<script>
import BDtable from "@/components/BD_table/index";
import BDfrom from "@/components/BD_from/index";
import BDdialog from "@/components/BD_dialog/index";
import { log } from "util";
export default {
  name: "InformedConsent",
  components: {
    BDtable,
    BDfrom,
    BDdialog
  },
  data() {
    return {
      logoImg: require("../../../assets/images/person/argee-icon.png"),
      argeeImg: [
        "http://cdn.duitang.com/uploads/item/201608/16/20160816100355_kTXdF.jpeg"
      ],
      loading: false,
      // 表单基础参数
      fromConfig: {
        // 表单验证规则
        inline: true,
        ref: "ruleForm",
        size: "small",
        noBtn: { label: "取 消", show: false }
      },
      // 查询接口
      apiData: {
        apiName: "GetConsentFormList",
        apiParam: {
          page: 1,
          page_size: 10,
          sign_time: ""
        }
      },
      // 表格数据
      tableHead: [
        {
          label: "图标",
          width: "100",
          formatter: (row, column, cellValue, index) => {
            return (
              <div class="tableIcon">
                <img src={this.logoImg} alt="" />
              </div>
            );
          }
        },
        {
          label: "内容",

          formatter: (row, column, cellValue, index) => {
            // console.log(row.sign_time);
            return (
              <div class="tableContent">
                <div class="info fs16">
                  <p>同意书</p>
                </div>
                <div class="time">
                  签订日期: {this.$formatTime(row.sign_time * 1000)}
                </div>
              </div>
            );
          }
        },
        {
          label: "操作",
          type: "btn",
          width: "100",
          btns: [{ label: "查看" }],
          btnClick: (btn, rown, index) => {
            // 弹窗显示
            this.argeeImg.splice(0, 1, rown.upload_file);

            document.getElementById("imgBox").click();
          }
        }
      ],
      // 表格配置
      tableConfig: {
        showHeader: false,
        pagingPar: {
          total: 10,
          layout: "total, sizes, prev, pager, next, jumper",
          currentPage: 1,
          align: "left",
          background: true,
          isShow: false
        },
        tableData: [],
        showSummary: null
      },
      // 弹窗
      dialogParam: {
        title: "",
        width: "890px",
        visible: false,
        lockScroll: true,
        okBtn: {
          show: false
        },
        noBtn: {
          show: false
        }
      }
    };
  },
  methods: {
    // 确定回调事件
    submitForm(formName) {
      this.getData();
    },
    // 重置回调事件
    resetForm(formName) {
      // console.log("重置回调");
    },
    // 分页改变
    sizeChange(obj) {
      this.apiData.apiParam.page = obj.page;
      this.apiData.apiParam.page_size = obj.pageSize;
      this.getData();
    },
    // 获取接口数据
    getData() {
      this.loading = true;
      let { apiName, apiParam } = this.apiData;
      let params = {
        ...apiParam
      };
      params.sign_time = params.sign_time / 1000;
      if (apiName && typeof apiParam === "object") {
        this.$api[apiName](params).then(res => {
          this.loading = false;
          this.tableConfig.tableData = res;
        });
      } else {
        console.error("请传入正确的接口参数");
      }
    },
    getList() {
      if (this.apiData.apiParam.sign_time == null) {
        this.getData();
      }
    }
  },
  created() {
    this.getData();
  },
  watch: {
    apiData: {
      handler(newValue, oldValue) {
        // console.log("new", newValue);
      },
      deep: true
    }
  }
};
</script>

<style  lang="scss">
#InformedConsent {
  .agree-top {
    padding: 16px 0 0 30px;
    border-radius: 10px;
  }
  .argee-content {
    border-radius: 10px;
    padding: 30px;
    h2 {
      // line-height: 60px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    .resultForm {
      .el-table::before {
        height: 0 !important;
      }
      //表格部分样式
      .tableIcon {
        text-align: center;
        img {
          width: 62px;
          height: 62px;
          vertical-align: middle;
        }
      }
      .tableContent {
        text-align: left;
        .info {
          p {
            color: rgba(51, 51, 51, 1);
            display: inline-block;
          }
        }
        .time {
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
}
</style>
