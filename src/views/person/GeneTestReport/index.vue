<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 20:27:01
 * @LastEditors  : Seven
 * @LastEditTime : 2020-01-14 18:18:04
 -->
<template>
  <div class="geneTestReport">
    <div class="gene-top">
      <div class="searchFrom bgcfff">
        <BDfrom @submitForm="submitForm"
          ref="serchFrom"
          :fromConfig="fromConfig"
          :formData="apiData1['apiParam']">
          <el-form-item label
            style="width:166px">
            <el-input v-model.trim="apiData1['apiParam'].product_name"
              clearable
              placeholder="输入检测报告名称"></el-input>
          </el-form-item>
          <el-form-item style="width:166px"
            label>
            <el-date-picker value-format="timestamp"
              v-model="apiData1['apiParam'].create_time"
              placeholder="采样日期"
              style="width: 100%;"></el-date-picker>
          </el-form-item>
        </BDfrom>
      </div>
      <div class="gene-tatal bgcfff">
        <p>检测报告统计</p>
        <p class="tcr">
          <span class="fs20">{{ reports.total }}</span>份
        </p>
      </div>
    </div>
    <div class="gene-content">
      <div class="tapBar">
        <div class="bar tc c666"
          @click="changeActive(1)"
          :class="active===1 ? 'active' :''">
          <div class="barImg mr0auto">
            <img src="../../../assets/images/person/transport.png"
              alt />
            <p class="c78D0C1 fw400">
              <span>{{ reports.status_1 }}</span>份
            </p>
          </div>
          <p class="fs18 lh50 status">样本处理中</p>
        </div>
        <p class="line"></p>
        <div class="bar c666 tc"
          @click="changeActive(2)"
          :class="active===2 ? 'active' :''">
          <div class="barImg mr0auto">
            <img src="../../../assets/images/person/huayanguanli.png"
              alt />
            <p class="c78D0C1 fw400">
              <span>{{ reports.status_2 }}</span>份
            </p>
          </div>
          <p class="fs18 lh50 status">样本检测中</p>
        </div>
        <p class="line"></p>
        <div class="bar c666 tc"
          @click="changeActive(3)"
          :class="active===3 ? 'active' :''">
          <div class="barImg mr0auto">
            <img src="../../../assets/images/person/xingzhuang-2.png"
              alt />
            <p class="c78D0C1 fw400">
              <span>{{ reports.status_3 }}</span>份
            </p>
          </div>
          <p class="fs18 lh50 status">报告已出具</p>
        </div>
      </div>
      <div class="resultFrom">
        <BDtable ref="serchFrom"
          :tableHead="newtableHead"
          :tableConfig="tableConfig"
          @sizeChange="sizeChange"
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"></BDtable>
      </div>
      <!-- <div @click="showFile('')">555</div> -->
      <!-- 弹窗--详情 -->
      <BDdialog :dialogParam="dialogParam">
        <previewFile :pdfUrl="src"></previewFile>
      </BDdialog>
    </div>
  </div>
</template>

<script>
import BDtable from "@/components/BD_table/index";
import BDfrom from "@/components/BD_from/index";
import previewFile from "@/views/person/previewFile/index";
import BDdialog from "@/components/BD_dialog/index";
import { mapGetters } from "vuex";
export default {
  name: "GeneTestReport",
  components: { BDtable, BDfrom, previewFile, BDdialog },
  data() {
    return {
      logoImg: require("../../../assets/images/person/songjian.png"),
      loading: false,
      active: 1,
      reports: {
        total: 0,
        status_1: 0,
        status_2: 0,
        status_3: 0
      },
      // 表单基础参数
      fromConfig: {
        // 表单验证规则
        inline: true,
        ref: "serchFrom",
        size: "small",
        noBtn: {
          show: false
        }
      },
      src: {},
      // 查询接口
      apiData: {
        apiName: "GetCheckReportCount",
        apiParam: {
          product_name: "",
          create_time: ""
        }
      },
      apiData1: {
        apiName: "GetCheckReportList",
        apiParam: {
          page_no: 1,
          page_size: 10,
          check_status: 1,
          product_name: "",
          create_time: ""
        }
      },
      dialogParam: {
        title: "",
        top: "2%",
        center: true,
        width: "500px",
        visible: false,
        lockScroll: true,
        okBtn: {
          show: false
        },
        noBtn: {
          show: false
        }
      },
      // 表格数据
      tableHead: [
        {
          label: "图标",
          width: "137",
          formatter: (row, column, cellValue, index) => {
            return (
              <div class="tableIcon">
                <p>
                  <img src={this.logoImg} alt="" />
                </p>
              </div>
            );
          }
        },
        {
          label: "内容",
          formatter: (row, column, cellValue, index) => {
            let { product_name, check_time } = row;
            let time = this.$formatTime(check_time * 1000);
            return (
              <div class="tableContent">
                <div class="info fs16">
                  <p>{{ product_name }}</p>
                </div>
                <div class="time">采样日期：{{ time }}</div>
              </div>
            );
          }
        }
      ],
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
      }
    };
  },
  methods: {
    // tap切换
    changeActive(num) {
      this.active = num;
      if (num === 1) {
        this.logoImg = require("../../../assets/images/person/songjian.png");
      } else if (num === 2) {
        this.logoImg = require("../../../assets/images/person/jiancezhong.png");
      } else {
        this.logoImg = require("../../../assets/images/person/complete.png");
      }
      this.apiData1.apiParam.check_status = num;
      this.getData1();
    },
    getList() {
      this.getData1();
    },
    // 确定回调事件
    submitForm(formName) {
      this.getData1();
    },
    // 分页改变
    sizeChange(obj) {
      this.apiData.apiParam.page_no = obj.page_no;
      this.apiData.apiParam.page_size = obj.pageSize;
      this.getData();
    },
    // 获取接口数据
    getData() {
      this.loading = true;
      let { apiName, apiParam } = this.apiData;
      if (apiName && typeof apiParam === "object") {
        this.$api[apiName](apiParam).then(res => {
          this.loading = false;
          this.reports = res;
        });
      } else {
        // this.$showMsg("请传入正确的接口参数");
      }
    },
    // 获取列表数据
    getData1() {
      this.loading = true;
      let { apiName, apiParam } = this.apiData1;
      if (apiName && typeof apiParam === "object") {
        let newParam = Object.assign({}, apiParam);
        newParam.create_time = newParam.create_time / 1000;
        this.$api[apiName](newParam).then(res => {
          this.loading = false;
          let { data, total } = res;
          this.tableConfig.tableData = data;
          this.tableConfig.pagingPar.total = Number(10);
        });
      } else {
        // this.$showMsg("请传入正确的接口参数");
      }
    },
    //点击下载的方法
    uploadFile(file) {
      let href = file.file_url;
      var a = document.createElement("a");
      a.setAttribute("href", href);
      a.setAttribute("target", "_blank");
      a.setAttribute("download", new Date().getTime() + "." + file.file_type);
      a.setAttribute("id", "startTelMedicine");
      // 防止反复添加
      if (document.getElementById("startTelMedicine")) {
        document.body.removeChild(document.getElementById("startTelMedicine"));
      }
      document.body.appendChild(a);
      a.click();
    },
    getFiles(id, type) {
      this.$api["GetCheckReportDetail"]({
        check_report_id: id
      })
        .then(res => {
          let _file = res[0];
          if (_file && _file.file_url) {
            if (type == 1) {
              this.src = _file;
              this.dialogParam.visible = true;
            } else {
              this.uploadFile(_file);
            }
          }
        })
        .catch(err => {
          this.$showMsg(err);
        });
    }
  },
  created() {
    // 获取报告统计
    this.getData();
    // 获取列表
    this.getData1();
  },
  computed: {
    newtableHead() {
      let newVal = [
        {
          label: "图标",
          width: "137",
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
            return (
              <div class="tableContent">
                <div class="info fs16">
                  <p>{row.product_name}</p>
                </div>
                <div class="time">
                  采样日期：{this.$formatTime(row.check_time * 1000)}
                </div>
              </div>
            );
          }
        }
      ];
      if (this.active == 3) {
        newVal.push({
          label: "操作",
          type: "btn",
          className: this.active === 3 ? "" : "down",
          width: "200px",
          btns: [{ label: "查看" }, { label: "下载" }],
          btnClick: (btn, rown, index) => {
            if (btn.label == "查看") {
              this.getFiles(rown.check_report_id, 1);
            } else {
              this.getFiles(rown.check_report_id, 2);
            }
          }
        });
      }
      return newVal;
    },
    ...mapGetters(["userInfo", "getToken"])
  }
};
</script>
<style lang="scss">
.geneTestReport {
  // height: 400px;
  .gene-top {
    display: flex;
    justify-content: space-between;
    .searchFrom {
      padding: 16px 0 0 30px;
      border-radius: 10px;
      width: 690px;
      .el-input--suffix .el-input__inner {
        padding-right: 0 !important;
      }
    }
    .gene-tatal {
      width: 230px;
      border-radius: 10px;
      text-indent: 80px;
      padding: 10px 10px 0 0;
      background: url("../../../assets/images/person/gene_icon.png") -8px 11px #fff
        no-repeat;
    }
  }
  .gene-content {
    margin-top: 30px;
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    .tapBar {
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #eee;
      padding-bottom: 30px;
      .line {
        width: 120px;
        height: 4px;
        background: #eee;
        border-radius: 2px;
      }
      .bar {
        width: 200px;
        display: flex;
        flex-direction: column;
        .barImg {
          width: 88px;
          height: 88px;
          background: rgba($color: #7fd2c4, $alpha: 0.2);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 28px;
            height: 28px;
            margin-bottom: 10px;
          }
        }

        &.active {
          font-weight: bold;
          color: #78d0c1;
          .status::after {
            content: "";
            display: block;
            width: 40px;
            height: 5px;
            background: #78d0c1;
            margin: 0 auto;
          }
        }
      }
    }
    .resultFrom {
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
        padding: 10px 0;
        .info {
          p {
            color: rgba(51, 51, 51, 1);
            display: inline-block;
          }
        }
        .time {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>

