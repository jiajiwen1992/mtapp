import Vue from 'vue';
import Router from 'vue-router';
import login from '../page/login.vue';
import home from '../page/home.vue';
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home
    }
  ]
})
