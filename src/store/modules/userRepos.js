import _ from 'lodash';

const userRepos = {
  namespaced: true,
  state: {
    repositories: [],
  },
  getters: {
    repositoriesByName: state => _.sortBy(state.repositories, ['name']),
    repositoriesByLanguage: state => _.sortBy(state.repositories, ['language']),
    repositoriesByStars: state => _.sortBy(state.repositories, ['stargazers_count']).reverse(),
  },
  mutations: {
    updateRepositories(state, payload) {
      state.repositories = payload.repositories;
    },
  },
  actions: {
    fetchData(context, login) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${login}/repos`).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            repositories: json,
          };
          context.commit('updateRepositories', payload);
          resolve();
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
          reject(error);
        });
      });
    },
  },
};

export default userRepos;
