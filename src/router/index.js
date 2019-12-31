import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    // 路由不存时，默认跳到首页
    {
      path: '*',
      name: 'common',
      component: resolve => require(['@/pages/index/index'], resolve)
    },
    {
      path: '/formVail',
      name: 'formVail',
      component: resolve => require(['@/pages/formVail/index'], resolve)
    },
    {
      path: '/fileUpload',
      name: 'fileUpload',
      component: resolve => require(['@/pages/fileUpload/index'], resolve)
    }
  ]
});

export default router;
