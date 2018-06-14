import Vue from 'vue';
import Vuex from 'vuex';
import searchUsers from './modules/searchUsers';
import userRepos from './modules/userRepos';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    searchUsers,
    userRepos,
    users,
  },
});

export default store;
