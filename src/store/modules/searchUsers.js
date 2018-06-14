const searchUsers = {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    updateItems(state, payload) {
      state.items = payload.items;
    },
  },
  actions: {
    fetchData(context, searchString) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/search/users?q=${searchString}`).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            items: json.items,
          };
          context.commit('updateItems', payload);
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

export default searchUsers;
