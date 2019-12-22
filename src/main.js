import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/theme/theme/style.css'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import personRouter from '@/router/routers/person'
import enterpriseRouter from '@/router/routers/enterprise'
// require styles
// import 'swiper/dist/css/swiper.css'
import api from './api'

Vue.use(VueAwesomeSwiper /* { default global options } */)

// if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(api)
Vue.use(ElementUI)

// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
function test () {
  store.dispatch("addRouters",{router}); 
}

// test()

router.beforeEach((to, from, next) => {
  console.log(router.hasAddRouter,to,'this');
  // next()
  if(to.meta.isStatic){
    next()
  }else{
    // 处理动态添加路由的刷新问题
    if(!router.hasAddRouter){
      console.log({from,to},111);
      let personRouters = store.state.user.userInfo.routers;
      let ww = JSON.parse(JSON.stringify(personRouters))
      console.log(personRouters,ww,'11111111111111111');
      
      // store.dispatch("addRouters",ww)

      store.dispatch("addRouters",personRouter)
        next({ ...to, replace: true })
        
    }
    else{
      console.log({from,to},333);
      next()
    }
    
  }
  // if(from)
  
  // debugger;
  

//   if (from.name == null) { //页面刷新
//     if(store.state.user.userInfo){
//       router.addRoutes(personRouter)
//       console.log(personRouter)
      
//     }
//     next()
//  } else {
//    next()
//  }
  
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
