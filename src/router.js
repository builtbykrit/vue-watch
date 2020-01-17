import Vue from 'vue';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // Scroll to the top of the page after every navigation
  scrollBehavior: () => ({ x: 0, y: 0 }),
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

Vue.use(VueAnalytics, {
  id: 'UA-50604120-7',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
  },
});


export default router;
