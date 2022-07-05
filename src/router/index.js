import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/home.vue')
  },
  {
    path:"/login",
    name:"login",
    component:() => import('../components/login.vue')
  }
 

]



const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router:router,
  render: h => h(App)
})

export default router
