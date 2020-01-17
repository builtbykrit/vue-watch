import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/plugin/:id',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue'),
    },
  ],
});
