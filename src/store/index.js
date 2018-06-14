import Vue from 'vue';
import Vuex from 'vuex';
import searchUsers from './modules/searchUsers';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    searchUsers,
  },
});

export default store;
