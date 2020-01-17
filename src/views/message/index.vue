<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 10:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-09 11:10:08
 -->
<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 10:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-24 14:01:13
 -->
<template>
  <div id="messageList">
    <el-tabs class="custom-tabs"
      v-model="activeName"
      @tab-click="handleClick">
      <el-tab-pane label="通知消息"
        name="1">
        <BDtable :tableHead="tableHead"
          :tableConfig="tableConfig"
          @sizeChange="sizeChange"
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"></BDtable>
      </el-tab-pane>
      <el-tab-pane label="系统消息"
        name="2">
        <BDtable :tableHead="tableHead2"
          :tableConfig="tableConfig2"
          @sizeChange="sizeChange2"
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"></BDtable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BDtable from "@/components/BD_table/index";
export default {
  name: "messageList",
  components: { BDtable },
  data() {
    return {
      loading: false,
      loading2: false,
      logoImg1: require("../../assets/images/home/gift.png"),
      logoImg2: require("../../assets/images/home/message.png"),
      activeName: "1",
      //第一个表格的数据
      tableHead: [
        {
          label: "图标",
          width: "95",
          className: "messageIcon",
          formatter: (row, column, cellValue, index) => {
            let imgLogo;
            if (row.notice_type_id === "1") {
              imgLogo = this.logoImg1;
            } else {
              imgLogo = this.logoImg2;
            }
            return (
              <div class="tableIcon">
                <img src={imgLogo} alt="" />
              </div>
            );
          }
        },
        {
          label: "内容",
          className: "messageList",
          formatter: (row, column, cellValue, index) => {
            let handleClick = () => {
              this.$router.push({
                path: `/userCener/messageDetail/${row.notice_id}`,
                query: {
                  notice_name: row.notice_name,
                  create_time: row.create_time
                }
              });
            };
            // notice_name下面
            // <span class="isNew"></span>
            return (
              <div onClick={handleClick} class="tableContent">
                <div class="info">
                  <p>{row.notice_name}</p>
                </div>
                <div class="time">{row.create_time}</div>
              </div>
            );
          }
        }
      ],
      tableConfig: {
        showHeader: false,
        pagingPar: {
          total: 0,
          layout: "total, sizes, prev, pager, next, jumper",
          currentPage: 1,
          align: "right",
          background: true,
          isShow: true
        },
        tableData: [],
        showSummary: null
      },
      apiData: {
        apiName: "GetNoticeList",
        apiParam: {
          page_no: 1,
          page_size: 10,
          module: 1
        }
      },
      //第二个表格的数据
      tableHead2: [
        {
          label: "图标",
          width: "95",
          className: "messageIcon",
          formatter: (row, column, cellValue, index) => {
            let imgLogo;
            if (row.notice_type_id === "1") {
              imgLogo = this.logoImg1;
            } else {
              imgLogo = this.logoImg2;
            }
            return (
              <div class="tableIcon">
                <img src={imgLogo} alt="" />
              </div>
            );
          }
        },
        {
          label: "内容",
          className: "messageList",
          formatter: (row, column, cellValue, index) => {
            let handleClick = () => {
              this.$router.push({
                path: `/userCener/messageDetail/${row.notice_id}`,
                query: {
                  notice_name: row.notice_name,
                  create_time: row.create_time
                }
              });
            };
            // <span class="isNew"></span>
            return (
              <div onClick={handleClick} class="tableContent">
                <div class="info">
                  <p>{row.notice_name}</p>
                </div>
                <div class="time">{row.create_time}</div>
              </div>
            );
          }
        }
      ],
      tableConfig2: {
        showHeader: false,
        pagingPar: {
          total: 10,
          currentPage: 1,
          pageSize: 10,
          align: "right",
          background: true,
          isShow: true
        },
        tableData: [],
        showSummary: null
      },
      apiData2: {
        apiName: "GetNoticeList",
        apiParam: {
          page_no: 1,
          page_size: 10,
          module: 2
        }
      }
    };
  },
  computed: {},
  methods: {
    handleClick() {
      if (this.activeName === "1") {
        this.getData();
      } else {
        this.getData2();
      }
    },
    // 获取接口数据
    getData() {
      this.loading = true;
      let { apiName, apiParam } = this.apiData;
      if (apiName && typeof apiParam === "object") {
        this.$api[apiName](apiParam).then(res => {
          this.loading = false;
          let { data, total } = res;
          for (let key of data) {
            key.create_time = this.$formatTime(key.create_time * 1000);
          }
          this.tableConfig.tableData = data;
          this.tableConfig.pagingPar.total = Number(total);
        });
      } else {
        console.error("请传入正确的接口参数");
      }
    },
    // 分页改变
    sizeChange(obj) {
      this.apiData.apiParam.page_no = obj.page;
      this.apiData.apiParam.page_size = obj.pageSize;
      this.getData();
    },
    // 获取接口数据
    getData2() {
      this.loading2 = true;
      let { apiName, apiParam } = this.apiData2;
      if (apiName && typeof apiParam === "object") {
        this.$api[apiName](apiParam).then(res => {
          this.loading2 = false;
          let { data, total } = res;
          for (let key of data) {
            key.create_time = this.$formatTime(key.create_time * 1000);
          }
          this.tableConfig2.tableData = data;
          this.tableConfig2.pagingPar.total = Number(total);
        });
      } else {
        console.error("请传入正确的接口参数");
      }
    },
    // 分页改变
    sizeChange2(obj) {
      this.apiData2.apiParam.page_no = obj.page;
      this.apiData2.apiParam.page_size = obj.pageSize;
      this.getData2();
    }
  },
  created() {
    this.getData();
    // this.getData2();
  }
};
</script>

<style lang='less' >
#messageList {
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  .custom-tabs {
    .el-tabs__item.is-top {
      font-size: 16px !important;
      color: #666;
      line-height: 30px;
      &.is-active {
        font-size: 18px;
        color: #78d0c1;
        font-weight: bold;
      }
    }
    .el-tabs__nav-wrap::after {
      height: 0;
    }
    .el-tabs__active-bar {
      height: 4px;
      border-radius: 2px;
    }
  }
  //表格部分样式

  .tableIcon {
    text-align: left;
    img {
      width: 62px;
      height: 62px;
    }
  }
  .messageIcon {
    .cell{
    padding-left: 0;
    }
  }
  .messageList {
    .tableContent {
      text-align: left;
      .info {
        p {
          color: rgba(51, 51, 51, 1);
          display: inline-block;
          margin-bottom: 14px;
          margin-right: 14px;
        }
        .isNew {
          width: 39px;
          height: 20px;
          color: white;
          text-align: center;
          background: rgba(255, 116, 101, 1);
          &::after {
            content: "NEW";
          }
        }
      }
      .time {
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
</style>
