import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Icon, Button } from 'iview';
import 'iview/dist/styles/iview.css';
import Axios from '@/api'
import store from './store'
import Loadsh from 'loadsh'
Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use(Icon)
Vue.use(Button)
Vue.prototype.$http = Axios;
global._ = Loadsh;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
