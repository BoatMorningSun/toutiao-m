import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 
import './styles/index.less'
import 'amfe-flexible'
import 'vant/lib/index.css'
import { Button , NavBar , Form , Field ,Icon } from 'vant';
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Form);
Vue.use(Field);
Vue.use(Icon);
Vue.config.productionTip = false
 
new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
