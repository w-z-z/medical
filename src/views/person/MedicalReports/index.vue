<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-12-23 20:27:01
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 18:38:04
 -->
<template>
  <div id="MedicalReports">
    <div class="medical-top mb30">
      <!-- 搜索表单 -->
      <div class="searchFrom bgcfff">
        <BDfrom @submitForm="submitForm"
          ref="medicalFrom"
          :fromConfig="fromConfig"
          :formData="apiData['apiParam']">
          <el-form-item label
            style="width:166px">
            <el-input v-model.trim="apiData['apiParam'].report_name"
              clearable
              placeholder="输入体检报告名称"></el-input>
          </el-form-item>
          <el-form-item style="width:166px"
            label>
            <el-date-picker v-model="apiData['apiParam'].check_time"
              placeholder="采样日期"
              value-format="timestamp"
              style="width: 100%;"></el-date-picker>
          </el-form-item>
        </BDfrom>
      </div>
      <!-- 统计 -->
      <div class="medical-tatal bgcfff">
        <p>上传体检报告</p>
        <p class="tcr">
          <span class="fs20">{{ total?total:0 }}</span>份
        </p>
      </div>
    </div>
    <!-- 表格 -->
    <div class="resultFrom">
      <BDtable ref="searchTable"
        :tableHead="tableHead"
        :tableConfig="tableConfig"
        @sizeChange="sizeChange"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"></BDtable>
    </div>
    <!-- 上传模态框 -->
    <BDdialog :dialogParam="dialogParam">
      <upload @getVal="getVal"></upload>
    </BDdialog>
  </div>
</template>
<script>
import BDtable from "@/components/BD_table/index";
import BDfrom from "@/components/BD_from/index";
import BDdialog from "@/components/BD_dialog/index";
import upload from "@/components/Upload/upload.vue";
export default {
  name: "MedicalReports",
  components: {
    BDtable,
    BDfrom,
    BDdialog,
    upload
  },
  data() {
    return {
      loading: false,
      total: 0,
      // 表单基础参数
      fromConfig: {
        // 表单验证规则
        inline: true,
        ref: "medicalFrom",
        size: "small",
        noBtn: { show: false }
      },
      // 查询接口
      apiData: {
        apiName: "GetPhysicalExaminationReportList",
        apiParam: {
          // page_no: 1,
          // page_size: 10,
          report_name: "",
          check_time: ""
        }
      },
      // 表格数据
      tableHead: [
        {
          label: "体检日期",
          width: "200",
          prop: "check_time"
        },
        {
          label: "体检报告名称",
          width: "300",
          prop: "report_name"
        },
        {
          label: "上传日期",
          prop: "upload_time"
        },
        {
          label: "操作",
          type: "btn",
          width: "150",
          btns: [{ label: "删除" }],
          btnClick: (btn, rown, index) => {
            let { physical_examination_report_id } = rown;
            this.$api["DeletePhysicalExaminationReport"]({
              physical_examination_report_id
            })
              .then(res => {
                this.$showMsg("已删除!");
                this.GetPhysicalExaminationCount();
                this.getData();
              })
              .catch(msg => {
                this.$showMsg(msg);
              });
          }
        }
      ],
      tableConfig: {
        showHeader: true,
        border: true,
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
        title: "上传体检报告",
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
      this.GetPhysicalExaminationCount();
    },
    //获取体检报告
    GetPhysicalExaminationCount() {
      this.$api["GetPhysicalExaminationCount"]().then(res => {
        this.total = res;
      });
    },
    // // 重置回调事件
    // resetForm(formName) {
    //   this.apiData.apiParam = {
    //     true_name: "",
    //     create_time: ""
    //   };
    //   this.$refs.searchTable.refresh(2);
    //   this.GetPhysicalExaminationCount();
    // },
    // 分页改变
    sizeChange(obj) {
      this.apiData.apiParam.page_no = obj.page;
      this.apiData.apiParam.page_size = obj.pageSize;
      this.getData();
      this.GetPhysicalExaminationCount();
    },
    // 获取接口数据
    getData() {
      this.loading = true;
      let { apiName, apiParam } = this.apiData;
      if (apiName && typeof apiParam === "object") {
        let newParam = Object.assign({}, apiParam);
        newParam.check_time = newParam.check_time / 1000;
        this.$api[apiName](newParam).then(res => {
          this.loading = false;
          for (let key of res) {
            key.upload_time = this.$formatTime(key.upload_time * 1000);
            key.check_time = this.$formatTime(key.check_time * 1000);
          }
          this.tableConfig.tableData = res;
        });
      } else {
        console.error("请传入正确的接口参数");
      }
    },
    getVal(data) {
      this.dialogParam.visible = data;
      this.getData();
      this.GetPhysicalExaminationCount();
    }
  },
  created() {
    this.getData();
    this.GetPhysicalExaminationCount();
  }
};
</script>
<style lang="scss" scoped>
#MedicalReports {
  .medical-top {
    display: flex;
    justify-content: space-between;
    .searchFrom {
      padding: 16px 0 0 30px;
      border-radius: 10px;
      width: 690px;
    }
    .medical-tatal {
      width: 230px;
      border-radius: 10px;
      text-indent: 80px;
      padding: 10px 10px 0 0;
      background: url("../../../assets/images/person/send.png") -8px 11px #fff no-repeat;
    }
  }
}
</style>
