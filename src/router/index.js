import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
