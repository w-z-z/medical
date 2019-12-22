<template>
  <div>
    <h3>二次封装</h3>
    <el-select v-model="apiData.apiParam.date"
      placeholder="请选择">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="apiData.apiParam.content">
    </el-input>
    <!-- <el-button @click="apiData.apiParam.date = '2019-09-25'">重置</el-button> -->
    <el-button @click="getD(2)">搜索返回第一页</el-button>
    <!-- <el-button @click="getD(1)">刷新当前页</el-button> -->
    <br>
    <br>
    <BDtableApi ref="BDtableApi"
      :tableHead="tableHead"
      @select="select"
      :apiData="apiData">
    </BDtableApi>
    <h3>基础显示table</h3>
    <BDtable :tableHead="tableHead2"
      @select="select"
      :tableConfig="tableConfig"
      @sizeChange="sizeChange"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)">
    </BDtable>
  </div>
</template>

<script>
import BDtableApi from "./api_table";
import BDtable from "./index";
export default {
  name: "BD-table",
  components: { BDtableApi, BDtable },
  data() {
    return {
      loading: false,
      options: [
        {
          value: "2019-09-25",
          label: "9月25"
        },
        {
          value: "2019-09-26",
          label: "9月26"
        }
      ],
      tableHead: [
        // {
        //   type: "selection",
        //   width: "60px",
        //   selectable: (row, index) => {
        //     if (index > 0) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }
        // },
        // {
        //   label: "编号",
        //   type: "index",
        //   width: "60px"
        // },
        // {
        //   label: "日期",
        //   prop: "guest_team",
        //   formatter: row => {
        //     return <span>{row.guest_team}</span>;
        //   }
        // },
        // {
        //   label: "日期2",
        //   prop: "mark",
        //   width: "100"
        // },
        // {
        //   label: "日期3",
        //   prop: "match_code"
        // },
        {
          label: "金额",
          prop: "win_odds"
        },
        {
          label: "操作",
          type: "btn",
          btns: [{ label: "111" }, { label: "aaa" }],
          btnClick: (btn, rown, index) => {
            console.log(btn, rown, index);
          }
        }
      ],
      apiData: {
        apiName: "getNumberRewardList",
        apiParam: {
          cp_key: "jczq",
          date: "2019-09-25",
          page: 1,
          content:"ddd1",
          page_size: 10,
          temp: 0
        }
      },

      /**
       *  table头部参数
       *
       *  label, // （类型：String）显示的标题
       *  prop, // （类型：String）对应列内容的字段名
       *  width, // （类型：String）对应列的宽度
       *  fixed = false, //（类型：String，Boolean）列是否固定在左侧或者右侧，true 表示固定在左侧【true, left, right】
       *  align = "", //（类型：String）对齐方式
       *  headerAlign = '', //（类型：String）表头对齐方式，若不设置该项，则使用表格的对齐方式
       *  className = '', //（类型：String）列的 className
       *  type, //（类型：String）对应列的类型【selection / index / expand / btn】
       *  minWidth = '', //（类型：String） 对应列的最小宽度
       *  formatter = null, //（类型：Function） 用来格式化内容
       *  showOverflowTooltip = false, //（类型：Boolean） 当内容过长被隐藏时显示 tooltip【false / true】
       *  labelClassName = '', //（类型：String）当前列标题的自定义类名
       *  selectable = null, //（类型：Function） 仅对 type=selection 的列有效,类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 【Function(row, index)】
       *  btns = null, //（类型：Array） 仅对 type=btn 的列有效
       *  btnClick = null //（类型：Function）按钮点击事件回调  仅对 type=btn 的列有效
       *  sortable = false //（类型：Boolean）该列是否排序
       */
      tableHead2: [
        // {
        //   type: "selection",
        //   selectable: (row, index) => {
        //     if (index > 0) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }
        // },
        // {
        //   label: "自定义编号",
        //   formatter: (row, column, cellValue, index) => {
        //     let { page, page_size } = this.apiData2.apiParam;
        //     return <span>{index + 1 + (page - 1) * page_size}</span>;
        //   }
        // },
        // {
        //   label: "日期",
        //   prop: "guest_team",
        //   formatter: row => {
        //     return <span>{row.guest_team}</span>;
        //   }
        // },
        // {
        //   label: "日期2",
        //   prop: "mark",
        //   width: "100"
        // },
        // {
        //   label: "日期3",
        //   prop: "match_code"
        // },
        {
          label: "金额",
          prop: "win_odds"
        },
        {
          label: "操作",
          type: "btn",
          btns: [{ label: "111" }, { label: "aaa" }],
          btnClick: (btn, rown, index) => {
            console.log(btn, rown, index);
          }
        }
      ],

      /**
       *  table组件相关参数
       *
       *  tableData              // table组件显示的数据（类型 array）
       *  height                 // table组件高度（类型 string/number）
       *  maxHeight              // table组件最小高度（类型 string/number）
       *  stripe                 // 是否为斑马纹 table（类型 boolean）
       *  border                 // 是否带有纵向边框（类型 boolean）
       *  size                   // Table 的尺寸（类型 string）【medium / small / mini】
       *  showHeader             // 是否显示表头（类型 boolean）
       *  highlightCurrentRow    // 是否要高亮当前行（类型 boolean）
       *  showSummary            // 是否在表尾显示合计行（类型 Boolean）
       *  sumText                // 合计行第一列的文本（类型 String）
       *  summaryMethod          // 自定义的合计计算方法（类型 Function({ columns, data })）
       *  spanMethod             // 自定义合并行或列（类型 Function({ row, column, rowIndex, columnIndex })）
       *  pagingPar              // 分页相关配置
       */
      tableConfig: {
        /**
         * 分页相关配置
         *
         * total              // 总条数（类型 Number）
         * layout             // 组件布局，子组件名用逗号分隔（类型 String）【sizes, prev, pager, next, jumper, ->, total, slot】
         * pageSizes          // 每页显示个数选择器的选项设置（类型 Array）【[10, 20, 30, 40, 50, 100]】
         * pageSize           // 每页显示条目个数（类型 number）
         * currentPage        // 当前页数，（类型 number）
         * align              // 组件显示位置，（类型 String）【left, center, right】
         * background         // 是否为分页按钮添加背景色，（类型 boolean）【true, false】
         * isShow             // 是否显示分页组件，（类型 boolean）【true, false】
         */
        pagingPar: {
          total: 0,
          pageSizes: [2, 4, 6, 10],
          pageSize: 2
          // layout: "total, sizes, prev, pager, next, jumper",
          // currentPage: 1,
          // align: "left",
          // background: true,
          // isShow: true
        },
        tableData: []
        // height: null,
        // maxHeight: null,
        // stripe: false,
        // border: false,
        // size: null,
        // showHeader: true,
        // highlightCurrentRow: false,
        // showSummary: true,
        // sumText: "合计",
        // summaryMethod: null,
        // spanMethod: null
      },
      apiData2: {
        apiName: "getRewardList",
        apiParam: {
          cp_key: "jczq",
          date: "2019-09-25",
          page: 1,
          page_size: 2,
          temp: 0
        }
      }
    };
  },
  computed: {},
  methods: {
    select(arr) {
      console.log(arr);
    },
    getD(type = 1) {
      /**
       * 刷新数据方法 refresh
       * type 默认等于 1 【1：刷新当前页面，2：刷新重置到第一页】
       */
      this.$refs.BDtableApi.refresh(type);
    },

    // 获取接口数据
    getData() {
       let { apiName, apiParam } = this.apiData;
      console.log(apiName)
      console.log(apiParam)
      this.loading = true;
       //模拟数据
        this.tableConfig.tableData =[
              {win_odds:10},
              {win_odds:10},
              {win_odds:10},
            ];
        this.tableConfig.pagingPar.total = Number(20);
        this.loading = false;
      // this.loading = true;
      // setTimeout(() => {
      //   let { apiName, apiParam } = this.apiData2;
      //   if (apiName && typeof apiParam === "object") {
      //     this.$api[apiName](apiParam).then(res => {
      //       this.loading = false;
      //       let _data = res.data;
      //       this.tableConfig.tableData = _data.datas;
      //       this.tableConfig.pagingPar.total = Number(_data.total_count);
      //     });
      //   } else {
      //     console.error("请传入正确的接口参数");
      //   }
      // }, 1000);
    },
    // 分页改变
    sizeChange(obj) {
      console.log(this.tableConfig);
      this.apiData2.apiParam.page = obj.page;
      this.apiData2.apiParam.page_size = obj.pageSize;
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
</style>