const repos = {
  namespaced: true,
  state: {
    repository: {},
  },
  mutations: {
    updateRepository(state, payload) {
      state.repository = payload.repository;
    },
  },
  actions: {
    fetchData(context, fullName) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/repos/${fullName}`).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            repository: json,
          };
          context.commit('updateRepository', payload);
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

export default repos;
