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


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
