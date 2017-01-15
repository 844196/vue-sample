import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: 'pink',
    accent: 'pink'
  }
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
