import Vue from 'vue';
import router from './router/index';
import App from './App.vue';
import Vant from 'vant';
import "lib-flexible/flexible.js";
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
