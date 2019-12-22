<!--
 * @Author: lc
 * @Date: 2019-09-24 14:25:18
 * @LastEditors: SPM
 * @LastEditTime: 2019-10-25 09:47:18
 * @Description: 组件
 -->

<template>
  <div>
    
    <el-table v-bind="{...resetTableConfig}"
      style="width: 100%"
      @select="select"
      @select-all="select">
      <template v-for="(item, index) in resetTableHead">
        <el-table-column v-if="item.type == 'btn'"
          :key="index"
          v-bind="{...item}">
          <template slot-scope="scope">
            <!-- <CustomBtn v-for="(btnItem, btnIndex) in item.btns"
              :key="btnIndex"
              @btnClick="item.btnClick ? item.btnClick(btnItem, scope.row, scope.$index) : null"
              v-bind="btnItem"></CustomBtn> -->
            <el-button size="mini"
              v-for="(btnItem, btnIndex) in item.btns"
              :key="btnIndex"
              @click="item.btnClick ? item.btnClick(btnItem, scope.row, scope.$index) : null">{{ typeof btnItem == 'object' ? btnItem.label : btnItem}}</el-button>
          </template>
        </el-table-column>
        <el-table-column v-else
          :key="index"
          v-bind="{...item}">
        </el-table-column>
      </template>
    </el-table>
    <div class="paging-panel"
      v-if="resetTableConfig.pagingPar.isShow">
      <el-pagination v-bind="{...resetTableConfig.pagingPar}"
        :current-page.sync="resetTableConfig.pagingPar.currentPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { TableHeadClass, PagingClass, TableConfigClass } from "./class";
export default {
  name: "BD-table",
  components: {},
  model: {
    prop: "tableConfig",
    event: "returnBack"
  },
  props: {
    tableHead: {
      type: [Array],
      default: null
    },
    tableConfig: {
      type: [Object],
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    // table参数重组
    resetTableHead() {
      if (this.tableHead) {
        console.log(this.tableHead.map(item => new TableHeadClass(item)))
        return this.tableHead.map(item => new TableHeadClass(item));
      } else {
        return [];
      }
    },
    resetTableConfig() {
      if (this.tableConfig) {
        // 组装分页参数
        if (this.tableConfig.pagingPar) {
          this.tableConfig.pagingPar = new PagingClass(
            this.tableConfig.pagingPar
          );
        }
        return new TableConfigClass(this.tableConfig);
      } else {
        return new TableConfigClass();
      }
    }
  },
  methods: {
    // 当用户手动勾选【数据行和全选】的 Checkbox 时触发的事件
    select(selection, row) {
      this.$emit("select", selection);
    },
    // 分页组件下拉事件
    handleSizeChange(size) {
      this.resetTableConfig.pagingPar.currentPage = 1;
      this.resetTableConfig.pagingPar.pageSize = size;

      this.sizeChange();
    },
    // 分页组件点击事件
    handleCurrentChange(currentPage) {
      this.sizeChange();
    },
    // 分页组件事件返回
    sizeChange() {
      let { currentPage, pageSize } = this.resetTableConfig.pagingPar;
      this.tableConfig.pagingPar.pageSize = pageSize;
      this.tableConfig.pagingPar.currentPage = currentPage;
      this.$emit("returnBack", this.tableConfig);
      this.$emit("sizeChange", {
        page: currentPage,
        pageSize: pageSize
      });
    }
  }
};
</script>

<style scoped>
.paging-panel {
  padding: 20px 0;
}
</style>
