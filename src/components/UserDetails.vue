<template lang="pug">
  div
    h1.title= '{{ login }}'
    div(v-if='user')
      img(:alt='user.login', :src='user.avatar_url', width='64')
      div= 'Bio: {{ user.bio }}'
      div= 'Email: {{ user.email }}'
      div= 'Followers: {{ user.followers }}'
      div= 'Following: {{ user.following }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'UserDetails',
  props: {
    login: { type: String, required: true },
  },
  computed: {
    user() {
      const user = store.state.users.user;
      user.bio = user.bio || '--';
      user.email = user.email || 'private';
      return user;
    },
  },
  mounted: function mounted() {
    store.dispatch('users/fetchData', this.login);
  },
};
</script>
