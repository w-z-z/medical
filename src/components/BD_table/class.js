
/**
 * table 头部
 */
class TableHeadClass {
  constructor({
    label, // （类型：String）显示的标题
    prop, // （类型：String）对应列内容的字段名
    width, // （类型：String）对应列的宽度
    fixed = false, //（类型：String，Boolean）列是否固定在左侧或者右侧，true 表示固定在左侧【true, left, right】
    align = "", //（类型：String）对齐方式
    headerAlign = '', //（类型：String）表头对齐方式，若不设置该项，则使用表格的对齐方式
    className = '', //（类型：String）列的 className
    type, //（类型：String）对应列的类型【selection/index/expand/btn】
    minWidth = '', //（类型：String） 对应列的最小宽度
    formatter = null, //（类型：Function） 用来格式化内容
    showOverflowTooltip = false, //（类型：Boolean） 当内容过长被隐藏时显示 tooltip【false/true】
    labelClassName = '', //（类型：String）当前列标题的自定义类名
    selectable = null, //（类型：Function） 仅对 type=selection 的列有效,类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 【Function(row, index)】
    btns = null, //（类型：Array） 仅对 type=btn 的列有效
    btnClick = null, //（类型：Function）按钮点击事件回调  仅对 type=btn 的列有效
    sortable = false // 排序
  } = {}) {
    this.label = label
    this.prop = prop
    this.width = width
    this.fixed = fixed
    this.align = align
    this.headerAlign = headerAlign
    this.className = className
    this.type = type
    this.minWidth = minWidth
    this.formatter = formatter
    this.showOverflowTooltip = showOverflowTooltip
    this.labelClassName = labelClassName
    this.selectable = selectable
    this.btns = btns
    this.btnClick = btnClick
    this.sortable = sortable
  }
}


/**
 * 分页参数设置
 */
class PagingClass {
  constructor({
    total = 100,
    layout = 'total, sizes, prev, pager, next, jumper',
    pageSizes = [10, 20, 50, 100],
    pageSize = 10,
    currentPage = 1,
    align = 'left',
    background = true,
    isShow = true
  } = {}) {
    // 总条数（类型 Number）
    this.total = total
    // 组件布局，子组件名用逗号分隔（类型 String）【sizes, prev, pager, next, jumper, ->, total, slot】
    this.layout = layout
    // 每页显示个数选择器的选项设置（类型 Array）【[10, 20, 30, 40, 50, 100]】
    this.pageSizes = pageSizes
    // 每页显示条目个数（类型 number）
    this.pageSize = pageSize
    // 当前页数，（类型 number）
    this.currentPage = currentPage
    // 组件显示位置，（类型 String）【left, center, right】
    this.align = align
    // 是否为分页按钮添加背景色，（类型 boolean）【true, false】
    this.background = background
    // 是否显示分页组件，（类型 boolean）【true, false】
    this.isShow = isShow
  }
}

/**
 * table参数设置
 */
class TableConfigClass {
  constructor({
    tableData = [],
    height = null,
    maxHeight = null,
    stripe = false,
    border = false,
    size = null,
    showHeader = true,
    highlightCurrentRow = false,
    showSummary = true,
    sumText = '合计',
    summaryMethod = null,
    spanMethod = null,
    pagingPar = new PagingClass()
  } = {}) {
    // table组件显示的数据（类型 array）
    this.data = tableData
    // table组件高度（类型 string/number）
    this.height = height
    // table组件最小高度（类型 string/number）
    this.maxHeight = maxHeight
    // 是否为斑马纹 table（类型 boolean）
    this.stripe = stripe
    // 是否带有纵向边框（类型 boolean）
    this.border = border
    // Table 的尺寸（类型 string）【medium / small / mini】
    this.size = size
    // 是否显示表头（类型 boolean）
    this.showHeader = showHeader
    // 是否要高亮当前行（类型 boolean）
    this.highlightCurrentRow = highlightCurrentRow
    // 是否在表尾显示合计行（类型 Boolean）
    this.showSummary = showSummary
    // 合计行第一列的文本（类型 String）
    this.sumText = sumText
    // 自定义的合计计算方法（类型 Function({ columns, data })）
    this.summaryMethod = summaryMethod
    // 自定义合并行或列（类型 Function({ row, column, rowIndex, columnIndex })）
    this.spanMethod = spanMethod
    this.pagingPar = pagingPar
  }
}


export { TableHeadClass, PagingClass, TableConfigClass }