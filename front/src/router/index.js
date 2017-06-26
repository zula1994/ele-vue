import Vue from 'vue';
import Router from 'vue-router';

import Home from '_V/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home', redirect: '/home' }
    // { path: '*', component: NotFound, name: 'notfound' }
  ]
})
