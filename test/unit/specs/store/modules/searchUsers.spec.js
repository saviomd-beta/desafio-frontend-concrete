import Vue from 'vue';
import searchUsers from '@/store/modules/searchUsers';

const userSaviomd = {
  avatar_url: 'https://avatars1.githubusercontent.com/u/1065210?v=4',
  events_url: 'https://api.github.com/users/saviomd/events{/privacy}',
  followers_url: 'https://api.github.com/users/saviomd/followers',
  following_url: 'https://api.github.com/users/saviomd/following{/other_user}',
  gists_url: 'https://api.github.com/users/saviomd/gists{/gist_id}',
  gravatar_id: '',
  html_url: 'https://github.com/saviomd',
  id: 1065210,
  login: 'saviomd',
  node_id: 'MDQ6VXNlcjEwNjUyMTA=',
  organizations_url: 'https://api.github.com/users/saviomd/orgs',
  received_events_url: 'https://api.github.com/users/saviomd/received_events',
  repos_url: 'https://api.github.com/users/saviomd/repos',
  score: 87.98113,
  site_admin: false,
  starred_url: 'https://api.github.com/users/saviomd/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/saviomd/subscriptions',
  type: 'User',
  url: 'https://api.github.com/users/saviomd',
};

describe('store/modules/searchUsers.js', () => {

  it(`should set items via mutation with specific user`, () => {
    const state = {
      items: [],
    };
    const payload = {
      items: [userSaviomd],
    };
    searchUsers.mutations.updateItems(state, payload);
    expect(state.items)
      .toContain(userSaviomd);
  });

  it('should set items via action with specific user', () => {
    const state = {
      items: [],
    };
    searchUsers.actions.fetchData(searchUsers, 'saviomd').then(() => {
      expect(state.items.length)
        .toBeGreaterThanOrEqual(1);
    });
  });

});
