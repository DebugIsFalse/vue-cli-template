import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

const test = 222;
test = 334;


import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
