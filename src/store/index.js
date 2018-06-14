import Vue from 'vue';
import Vuex from 'vuex';
import repos from './modules/repos';
import searchUsers from './modules/searchUsers';
import userRepos from './modules/userRepos';
import users from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    repos,
    searchUsers,
    userRepos,
    users,
  },
});

export default store;
