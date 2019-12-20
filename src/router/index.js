/*
 * @Description: 路由装载配置
 * @Author: chenwei
 * @Date: 2019-06-04 18:38:00
 * @LastEditors: chenwei
 * @LastEditTime: 2019-06-06 13:49:10
 */

// import Vue from 'vue';
// import Router from 'vue-router';
// Vue.use(Router);

// import routes from './allRouter';

// routes.unshift({ path: '*', redirect: '/order' });
// export default new Router({ routes });

import Vue from 'vue'
import Router from 'vue-router'

// import home from './routers/home';
import routers from './allRouter'

Vue.use(Router)

routers.unshift({ path: '/', redirect: '/home' })

export default new Router({
  mode: 'hash',
  routes: routers
})
