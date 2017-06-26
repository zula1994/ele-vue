import Vue from 'vue';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
