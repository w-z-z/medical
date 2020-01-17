/*
 * @Description: 项目入口文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:24:54
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-08 10:50:21
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/theme/theme/style.css'
import App from './App'
import router from './router'
import store from './store'
import styles from './styles/index.scss'
import api from './api'
import common from './utils/common'
import './assets/fonts/iconfont.css'
import * as qiniu from 'qiniu-js'
import _ from 'lodash'
Vue.prototype._ = _
Vue.use(api)
Vue.use(common)
Vue.use(ElementUI)
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')