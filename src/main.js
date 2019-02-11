import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SortedTablePlugin from 'vue-sorted-table';
import vueNumeralFilterInstaller from 'vue-numeral-filter';



//import axios from 'axios'

Vue.use(SortedTablePlugin)
Vue.use(vueNumeralFilterInstaller, {
  locale: 'en-gb'
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
