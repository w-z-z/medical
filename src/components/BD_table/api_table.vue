<template>
  <div>
    <BDtable :tableHead="tableHead"
      @select="select"
      @sizeChange="sizeChange"
      :tableConfig="tableConfig"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"></BDtable>
  </div>
</template>

<script>
import BDtable from "./index";
export default {
  name: "BD-table-api",
  components: { BDtable },
  model: {
    prop: "apiData",
    event: "returnBack"
  },
  props: {
    tableHead: {
      type: [Array],
      default: null
    },
    apiData: {
      type: [Object],
      default: null
    }
  },
  data() {
    return {
      tableConfig: {
        tableData: [],
        pagingPar: {
          total: 0,
          isShow: false
        },
        showSummary: null,
        // height: 200,
        // maxHeight: "200"
        // stripe: true,
        border: true
        // size: "mini",
        // showHeader: false,
        // highlightCurrentRow: true
        // summaryMethod: ({ columns, data }) => {
        //   const sums = [];
        //   columns.forEach((column, index) => {
        //     if (index === 0) {
        //       sums[index] = "总价";
        //       return;
        //     }
        //     const values = data.map(item => Number(item[column.property]));
        //     if (!values.every(value => isNaN(value))) {
        //       sums[index] = values.reduce((prev, curr) => {
        //         const value = Number(curr);
        //         if (!isNaN(value)) {
        //           return prev + curr;
        //         } else {
        //           return prev;
        //         }
        //       }, 0);
        //       sums[index] += " 元";
        //     } else {
        //       sums[index] = "/";
        //     }
        //   });
        //   return sums;
        // }
        // spanMethod: ({ row, column, rowIndex, columnIndex }) => {
        //   if (columnIndex === 0) {
        //     console.log(rowIndex % 3);
        //     if (rowIndex % 3 === 0) {
        //       return {
        //         rowspan: 3,
        //         colspan: 1
        //       };
        //     } else {
        //       return {
        //         rowspan: 0,
        //         colspan: 0
        //       };
        //     }
        //   }
        // }
      },
      loading: false
    };
  },
  computed: {},
  methods: {
    // 多选按钮接收参数
    select(arr) {
      this.$emit("select", arr);
    },
    // 获取接口数据
    getData() {
      this.loading = true;
      let { apiName, apiParam, timeParamsKey } = this.apiData;
      let newParams = Object.assign({}, apiParam);
      // console.log(this.apiData);
      // console.log(newParams);
      newParams[timeParamsKey] = newParams[timeParamsKey] / 1000;
      if (apiName && typeof apiParam === "object") {
        this.$api[apiName](newParams).then(res => {
          this.tableConfig.tableData = res;
          this.tableConfig.pagingPar.total = Number(10);
          this.loading = false;
        });
      } else {
        console.error("请传入正确的接口参数");
      }
    },
    // 分页改变
    sizeChange(obj) {
      this.apiData.apiParam.page_no = obj.page_no;
      this.apiData.apiParam.page_size = obj.pageSize;
      this.$emit("returnBack", this.apiData);
      this.getData();
    },
    // 刷新表格
    refresh(type = 1) {
      /**
       * type 1   刷新当前页面
       * type 2   刷新重置到第一页
       */
      if (type == 2) {
        this.tableConfig.pagingPar.currentPage = 1;
        this.apiData.apiParam.page_no = 1;
      }
      this.getData();
    }
  },
  created() {
    this.$nextTick(() => {
      this.getData();
    });
  },
  mounted() {},
  watch: {}
};
</script>

<style scoped>
</style>
<style>
.aaaa {
  background: red;
}
</style>