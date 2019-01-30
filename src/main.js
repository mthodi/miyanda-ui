import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SortedTablePlugin from 'vue-sorted-table'
//import axios from 'axios'

Vue.use(SortedTablePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
