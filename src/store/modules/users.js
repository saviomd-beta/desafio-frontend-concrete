const users = {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    updateData(state, payload) {
      state.user = payload.user;
    },
  },
  actions: {
    fetchData(context, login) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${login}`).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            user: json,
          };
          context.commit('updateData', payload);
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

export default users;
