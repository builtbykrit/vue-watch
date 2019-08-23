import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/scss/index.scss';
import {
  inThousands,
  withCommas,
} from './filters';

Vue.config.productionTip = false;

// filters
Vue.filter('inThousands', inThousands);
Vue.filter('withCommas', withCommas);

// plugins
Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
