import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import css from './assets/css/file.css'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ './components/home.vue'),
  },
  {
    path:"/login",
    name:"login",
    component:() => import('./components/login.vue')
  },
  {
    path:"/loginpage",
    name:"loginpage",
    component:() => import('./components/loginPage.vue')
  },
  {
    path:"/dashboard",
    name:"dashboard",
    component:() => import('./components/dashboard.vue')
  },
  {
    path:"/addData/:id",
    name:"addData",
    component:() => import('./components/addData.vue')
  },
  {
    path:'/mainComponent/:id',
    name:'mainComponent',
    component:()=> import('./components/mainComponent.vue')
  },
  {
    path:'/addTo/:id',
    name:'addto',
    component:()=> import('./components/addTo.vue')
  },

  
  
 

]

const router = new VueRouter({
  mode: 'history',
  routes
})




Vue.config.productionTip = false

new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')

