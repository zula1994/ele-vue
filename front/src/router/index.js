import Vue from 'vue';
import Router from 'vue-router';

import '_A/scss/index.scss';

import Home from '_V/Home';
import NotFound from '_V/NotFound';
import Main from '_V/Main';

import About from '_V/support/About';
import Agreement from '_V/support/Agreement';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, name: 'home' },
    {
      path: '/main',
      component: Main,
      children: [
        { path: '/place' },
        { path: '/support/about', component: About, name: 'about' },
        { path: '/support/agreement', component: Agreement, name: 'agreement'}
      ]
    },
    { path: '*', component: NotFound, name: 'notfound' }
  ]
})
