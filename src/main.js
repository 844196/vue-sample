import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: 'pink',
    accent: 'deep-orange'
  }
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
