import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Element from 'element-ui';
import store from './store';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
