<template>
  <div class="staff">
    <div class="serchFrom">
      <BDfrom @submitForm="submitForm"
        @resetForm="resetForm"
        ref="serchFrom"
        :fromConfig="fromConfig"
        :formData="apiData['apiParam']">
        <el-form-item label=""
          style="width:166px">
          <el-input v-model="apiData['apiParam'].userName"
            placeholder="员工姓名"></el-input>
        </el-form-item>
        <el-form-item style="width:106px"
          label="">
          <el-select v-model="apiData['apiParam'].sex"
            placeholder="员工性别">
            <el-option v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width:166px"
          label="">
          <el-date-picker v-model="apiData['apiParam'].date"
            placeholder="选择日期"
            style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item style="width:166px"
          label="">
          <el-select v-model="apiData['apiParam'].reportProgressStatus"
            placeholder="报告进度">
            <el-option v-for="item in reportProgressStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </BDfrom>
    </div>
    <div class="searchResult">
      <BDtableApi ref="staffTable"
        :tableHead="tableHead"
        @select="select"
        :apiData="apiData">
      </BDtableApi>
    </div>
  </div>
</template>
<script>
import BDtableApi from "@/components/BD_table/api_table";
import BDfrom from "@/components/BD_from/index";
export default {
  name: "staff",
  components: { BDtableApi, BDfrom },
  data() {
    return {
      loading: false,
      // 表单基础参数
      fromConfig: {
        // 表单验证规则
        inline: true,
        ref: "ruleForm",
        size: "small"
      },
      reportProgressStatus: [
        {
          value: "1",
          label: "处理中"
        },
        {
          value: "2",
          label: "2检测中"
        },
        {
          value: "3",
          label: "3已生成"
        }
      ],
      sexOptions: [
        {
          value: "女",
          label: "女"
        },
        {
          value: "男",
          label: "男"
        }
      ],
      tableHead: [
        {
          label: "姓名",
          prop: "true_name"
        },
        {
          label: "性别",
          prop: "sex"
        },
        {
          label: "生日",
          prop: "mobile"
        },
        {
          label: "建档日期",
          prop: "mobile"
        },
        {
          label: "检测项目",
          prop: "mobile"
        },
        {
          label: "采样日期",
          prop: "mobile"
        },
        {
          label: "报告进度",
          formatter: row => {
            let status = {
              1: "样本检测中",
              2: "报告处理中",
              3: "报告已出具"
            };
            return <div class="reportProgressStatus">{status[1]}</div>;
          }
        }
      ],
      apiData: {
        apiName: "testTableData",
        apiParam: {
          page: 1,
          page_size: 10,
          userName: "",
          sex: "",
          reportProgressStatus: "",
          date: ""
        }
      }
    };
  },
  computed: {},
  methods: {
    select(arr) {
      // console.log(arr);
    },
    // 确定回调事件
    submitForm(formName) {
      // console.log("确定回调");
      this.$refs.staffTable.refresh(2);
    },
    // 重置回调事件
    resetForm(formName) {
      this.$refs.staffTable.refresh(1);
      // console.log("重置回调");
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.staff {
  .reportProgressStatus {
    width: 92px;
    text-align: center;
    height: 30px;
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 5px;
    line-height: 30px;
  }
}
</style>
