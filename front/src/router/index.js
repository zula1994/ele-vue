import Vue from 'vue';
import Router from 'vue-router';

import '_A/scss/index.scss';

import Home from '_V/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, name: 'home' }
    // { path: '*', component: NotFound, name: 'notfound' }
  ]
})
