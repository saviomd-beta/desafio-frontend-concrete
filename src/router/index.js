import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
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
