<template>
    <div class="c_table" v-loading.body="loading">
      <el-table
        ref="myTable"
        :data="tableData"
        :height="height"
        :show-summary="showSummary"
        :summary-method="(param)=>getSummaries(param,headerItemList)"
        border
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <!-- 序号列 -->
        <el-table-column
          v-if="orderIndex"
          ref='myTable'
          :type="orderIndex.type"
          :index="orderIndex.index"
          :label="orderIndex.label"
          :width="orderIndex.width"
          :align="orderIndex.align"
          :fixed="orderIndex.fixed"
          label-class-name="headDefault"
        />
        <!-- 表格内容 -->
        <template  v-for="(item, index) in headerItemList" >
          <el-table-column
            v-if="item.isShow"
            :key="index"
            :type="item.type"
            :prop="item.prop"
            :label="item.label"
            :align="item.align"
            :width="item.width "
            :label-class-name="item.labelClass"
            :class-name="item.itemClass"
            :sortable="item.sortable"
            :sort-method="(a,b)=>sortMethod(a,b,item.prop)"
            :fixed="item.fixed"
            :formatter="!item.renders?null:(row, column, cellValue, index)=>formatterStr(row, column, cellValue, index, item)"
          >
          </el-table-column>
          <!-- :formatter="(row, column, cellValue, index)=>formatterStr(row, column, cellValue, index,item)" -->
        </template>
        <!-- 操作栏 -->
        <template v-if="typeof handlesList.renders !== 'function'">
          <el-table-column
            v-if="handlesList"
            :fixed="handlesList.fixed"
            :label="handlesList.label"
            :width="handlesList.width"
            :align="handlesList.align"
            label-class-name="headDefault"
            :formatter='handlesList.renders'>
            <template  slot-scope="scope">
              <el-button v-for="(item, index) in handlesList.btnList"
                :key="index"
                type="text"
                size="small"
                @click="btnsClick(item.label, scope.row, scope.$index)">
                {{ item.label }}
              </el-button>
            </template>  
          </el-table-column>
        </template>
        <template v-else-if="handlesList">
          <el-table-column
            v-if="handlesList"
            :fixed="handlesList.fixed"
            :label="handlesList.label"
            :width="handlesList.width"
            :align="handlesList.align"
            label-class-name="headDefault"
            :formatter='handlesList.renders'>
          </el-table-column>
        </template>
      </el-table>
      

      <!-- 分页 -->
      <div class="page-position">
        <el-pagination
          background
          layout="prev, pager, next,jumper"
          :page-size="+otherInfo.page_size"
          :current-page="+otherInfo.page"
          :hide-on-single-page='true'
          @current-change="handleCurrentChange"
          :total="+otherInfo.total_count">
        </el-pagination>
      </div>
      
    </div>
</template>
<script>
import server,{api} from '../../api/server'
// const HOVER_CLASS = 'hover' //默认hover
/*
  使用说明:
   1. labelClass itemClass 如果要传class 所传递的class名 style不能用scoped包裹
   2. TableHeadItem 类是显示传入项的基本参数
   3. selectionData的绑定方式是 v-model="selectionData"

*/
class TableHeadItem {
  constructor ({label = '', itemClass = '', align = 'center', fixed = null, width, sortable = false, isShow = true, prop, labelClass = '', renders, type, isSum = false} = {}) {
    this.label = label // 表头名称 (必填) string requred
    this.align = align // 内容对齐方式(默认 center) 可选 'center left right'
    this.fixed = fixed // 是否固定在两侧(默认 null) 可选 true 'left' 'right'
    this.width = width // 单元格的宽度(默认 null) 类型: string
    this.sortable = sortable // 单元格排序(默认 false) 类型: true false 'custom'
    this.isShow = isShow // 是否显示隐藏该列单元格(默认 true) 可选 true(显示) false(隐藏)
    this.prop = prop // 单元格映射字段(必填) 接口字段对应
    this.labelClass = labelClass // 表头单元格的class (默认 '')
    this.itemClass = itemClass // 内容单元格的class (默认'')
    this.renders = renders // 单元格显示的内容 (默认 null)
    /*
      类型: function 通element的表格行的formatter(row, column, cellValue, index){...}(必须要有返回值)
      or
      指定的字符串格式(如指定$*格式,原数据: 123, => $123 (单元格的内容被替换掉*部分))
      this.renders = '胜多负少*' 原数据: 123 =>胜多负少123
    */
    this.type = type // 表格类型(默认 null) selection(展开)/index(序号)/expand(勾选) 表格内容中不常见
    this.isSum = isSum // 列表项是否统计和值,在table属性showSummary时有效(默认 false) 可选 true 统计 false 不统计
  }
}

class HandleBtn {
  constructor(btnItem){
    if(typeof btnItem === 'string'){
      this.label = btnItem
      this.hoverClass = ''
    }else if(typeof btnItem === 'object' && btnItem !== null){
      this.label = btnItem.label
      this.hoverClass = btnItem.hoverClass
    }else{
      throw 'HandleBtn类需求的参数为string或者Object'
    }
    
  }
}
export default {
  name: 'M-table',
  model: {
    prop: 'selectionData',
    event: 'updateSelected'
  },
  props: {
    height: { // table属性 显示表格的高度 可控制表格的高度
      type: [Number, String],
      default: null
    },
    showSummary: {// table属性 是否显示合计栏
      type: Boolean,
      default: false
    },
    // 表格选中项的数据常配合勾选使用 父组件绑定方式v-model='selectionData'
    selectionData: {
      type: [Array] // 定义value属性
    },
    btns: {
      type: Object,
      default: null
    },
    // 是否展示操作序列 具体映射到orderIndex属性
    showIndex: {
      type: [Object, Number, Boolean],
      default: function () {
        return false
      }
    },
    // 表格头部参数项 在计算属性headerItemList中加工
    tableHead: {
      type: Array,
      default: []
    },
<<<<<<< HEAD
    //操作项(默认 false 不显示) 在计算属性handlesList中加工
    /* 
      {
        label: '操作', //操作项的名称
        fixed: 'right', //是否固定
        width: '200', //宽度
        btnList: ['基本信息','团队列表'] //按钮详情信息或者
        btnList: [
          {
            label: '基本信息', //btn名称
            hoverClass: 'xxx', //btn hover时显示类名
          }
        ]
      }
    */
=======
    // 操作项(默认 false 不显示) 在计算属性handlesList中加工
>>>>>>> 0caeb87a4ea12b0311c41ad6b617164a357e208d
    handleList: {
      type: [Object, Boolean],
      default: function () {
        return false
      }
    },
    /*
      请求接口参数
      {
        apiName: '', //api地址 必填
        filterData: { //接口请求参数 必填
          page: 1, 选填
          page_size: 20, 选填
          ...
        }
      },
    */
    dataInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    orderIndex () {
      let DEFAULT_CONFIG = {
        label: '序号',
        index: 1,
        type: 'index', // ['selection/index/expand']
        width: 50,
        align: 'center',
        fixed: null // 'true, left, right'
      }
      if (this.showIndex === false) { // 不显示order
        return this.showIndex
      } else if (typeof this.showIndex === 'number' || this.showIndex === true) {
        DEFAULT_CONFIG.index = this.showIndex || 1
        return DEFAULT_CONFIG
      } else if (typeof this.showIndex === 'object') {
        return Object.assign({}, DEFAULT_CONFIG, this.showIndex)
      }
    },
    headerItemList () {
      return this.tableHead.map(item => new TableHeadItem(item))
    },
    handlesList () {
      let DEFAULT_CONFIG = {
        label: '操作',
        width: 100,
        align: 'center',
        fixed: null, // 'true, left, right'
<<<<<<< HEAD
        btnList: [],
      }
      let {btnList} = this.handleList;
      if(this.handleList === false) { //不显示order
        return this.handleList
      }else if(typeof this.handleList === 'object'){
        this.handleList.btnList = btnList && btnList.map(btnObj=>new HandleBtn(btnObj))
        return Object.assign({},DEFAULT_CONFIG,this.handleList)
=======
        btnList: ['编辑', '删除']
      }
      if (this.handleList === false) { // 不显示order
        return this.handleList
      } else if (typeof this.handleList === 'object') {
        return Object.assign({}, DEFAULT_CONFIG, this.handleList)
>>>>>>> 0caeb87a4ea12b0311c41ad6b617164a357e208d
      }
    }
  },
  data () {
    return {
      tableData: [],
      DEFAULT_DATA: {
        page: 1,
        page_size: 20
      },
      otherInfo: {},
      loading: true
    }
  },
  mounted () {
    this.getList()
  },
  methods: {

    getList (data) {
      let {DEFAULT_DATA, dataInfo} = this
      let sendData = Object.assign({}, DEFAULT_DATA, dataInfo.filterData)
      this.loading = true
      // debugger;
<<<<<<< HEAD
      this.$api[dataInfo.apiName].post(sendData)
      .then(res => {
=======
      this.$api.post(dataInfo.api, sendData)
        .then(res => {
>>>>>>> 0caeb87a4ea12b0311c41ad6b617164a357e208d
        // debugger;
          console.log(res)
          this.loading = false
          const {datas, ...otherInfo} = res.data
          this.tableData = res.data.datas
          this.otherInfo = otherInfo
        })
    },
    handleCurrentChange (currentPage) {
      this.dataInfo.filterData.page = currentPage
      // this.otherInfo.page = currentPage;
      // this.getList()
    },
    /**
     * table操作列按钮事件
     * @item 当前点击的按钮参数
     * @row 当前行的数据
     * @index 当前点击的行下标
     */
    btnsClick (item, row, index) {
      this.$emit('btnsClick', item, row, index)
    },
    /**
     * table多选按钮事件
     * @val 返回选中行数组
     */
    handleSelectionChange (val) {
      // console.log(val);
      this.$emit('updateSelected', val)
    },
    sortMethod (a, b, key) { // 数字排序方法
      // console.log(a[key] - b[key]);
      return a[key] - b[key]
    },
    getSummaries (param, headerItemList) { // 求和方法
      const { columns, data } = param
      let hasOrder = this.showIndex ? 1 : 0
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        let colContentIndex = index - hasOrder
        let tableItem = headerItemList[colContentIndex]
        let isSum = (tableItem && tableItem.isSum) || false
        if (!isSum) {
          return sums[index] = '/'
        }
        // 得到当前列的数据集合
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] = typeof tableItem.renders === 'string' ? tableItem.renders.replace('*', sums[index]) : ''
        } else {
          sums[index] = '/'
        }
      })
      return sums
    },

    formatterStr (row, column, cellValue, index, item) {
      // console.log(column,cellValue,item);
      if (typeof item.renders === 'function') {
        return item.renders(row, column, cellValue, index)
      } else {
        return item.renders.replace('*', cellValue)
      }
    },
    // 用于外部调用多选选中 indexArr [1,2,3]
    data_select (indexArr) {
      if (indexArr) {
        indexArr.forEach(index => {
          let row = this.tableData[index]
          this.$refs.myTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.myTable.clearSelection()
      }
    }

  },
  watch: {
    dataInfo: {
      handler: function (val, oldVal) {
        this.getList()
      },
      deep: true

    }
  }
}
</script>
<style lang="less">
  // @import url("../../less/modifyEl");
  .page-position{
    text-align: right;
    padding: 20px 0;
  }
</style>
