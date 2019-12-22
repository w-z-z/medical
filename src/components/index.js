/*
 * @Author: ranli
 * @Date: 2019-09-25 16:09:18
 * @LastEditors: lc
 * @LastEditTime: 2019-09-28 15:48:25
 * @Description: Description
 */
/**
 * 注册组件到全局
 * 
 */
// 表格组件
// import Table from './BD_table'
import Table from './BD_table/demo'
import BD_from from './BD_from/demo'
import TimePick from './BD_timePick'
let Plugin = {
  install: (Vue) => {
    Vue.component(Table.name, Table)
    Vue.component(BD_from.name, BD_from)
    Vue.component(TimePick.name, TimePick)
  }
}

export default Plugin