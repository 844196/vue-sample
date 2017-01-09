export default [
  {
    path: '/',
    redirect: '/speech'
  },
  {
    path: '/speech',
    component: require('./pages/speech.vue')
  },
  {
    path: '/schedules',
    component: require('./pages/schedules.vue')
  },
]
