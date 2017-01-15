import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/speech'
  },
  {
    path: '/speech',
    component: require('./../pages/speech.vue')
  },
  {
    path: '/schedules',
    component: require('./../pages/schedules.vue')
  },
]

Vue.use(VueRouter)
export default new VueRouter({
  routes,
  mode: 'history'
})
