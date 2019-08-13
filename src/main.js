import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import { router } from './routes/index.js';

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueFormWizard)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
