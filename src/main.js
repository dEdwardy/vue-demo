import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Icon, Button, Form, FormItem, Input, Radio,Message } from 'iview';
import 'normalize.css'
import 'iview/dist/styles/iview.css';
import Axios from '@/api'
import store from './store'
import Loadsh from 'loadsh'
import Common  from 'components'
Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Common)
Vue.prototype.$http = Axios;
Vue.prototype.$Message = Message;
global._ = Loadsh;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
