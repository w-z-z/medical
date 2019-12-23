/*
 * @Description: 项目入口文件
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-22 18:24:54
 * @LastEditors  : ranli
 * @LastEditTime : 2019-12-23 11:23:49
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/theme/theme/style.css'
import App from './App'
import router from './router'
import store from './store'
import styles from './styles/index.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import personRouter from '@/router/routers/person'
import enterpriseRouter from '@/router/routers/enterprise'
import api from './api'

Vue.use(VueAwesomeSwiper)

Vue.use(api)
Vue.use(ElementUI)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {

  if (to.meta.isStatic) {
    next()
  } else {
    // 处理动态添加路由的刷新问题
    // console.log(router.hasAddRouter)
    // console.log(store.state.user.userInfo.type)
    if (!router.hasAddRouter) {
      let _type = store.state.user.userInfo.type == 1 ? personRouter : enterpriseRouter
      store.dispatch("addRouters", _type)
      next({
        ...to,
        replace: true
      })
    } else {
      next()
    }

  }

})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')