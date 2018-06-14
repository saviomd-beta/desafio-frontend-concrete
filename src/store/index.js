import Vue from 'vue';
import Vuex from 'vuex';
import searchUsers from './modules/searchUsers';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    searchUsers,
    users,
  },
});

export default store;
