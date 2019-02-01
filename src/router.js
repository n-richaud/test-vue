import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/cv/',
      name: 'cvHome',
      component: () => import(/* webpackChunkName: "about" */ './views/CvHome.vue'),
    },
    {
      path: '/cv/view',
      name: 'cvView',
      component: () => import(/* webpackChunkName: "about" */ './views/CvView.vue'),
    },
    {
      path: '/cv/edit',
      name: 'cvEdit',
      component: () => import(/* webpackChunkName: "about" */ './views/CvEdit.vue'),
    },
  ],
});
