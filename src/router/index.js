import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import User from '@/pages/User';
import UserSearchResult from '@/pages/UserSearchResult';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
    },
    {
      path: '/user-search',
      name: 'UserSearchResult',
      component: UserSearchResult,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
