import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 适配
import '@/mobile/flexible.js'
// 初始化样式
import '@/styles/reset.css'
import 'vant/lib/index.css'
import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Col,
  Row,
  Image,
  Cell,
  Icon,
  Toast,
  Search,
  List
} from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Image)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Search)
Vue.use(List)
Vue.prototype.$Toast = Toast
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
