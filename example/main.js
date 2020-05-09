import Vue from 'vue'
import App from './App.vue'

import comps from '../packages/index';
Vue.use(comps);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
