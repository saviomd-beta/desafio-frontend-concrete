<template lang="pug">
  .component
    h1.title= '{{ login }}'
    div(v-if='user')
      img.avatar(:alt='imgAvatarAlt', :src='user.avatar_url')
      .info= 'Bio: {{ user.bio }}'
      .info= 'Email: {{ user.email }}'
      .info= 'Followers: {{ user.followers }}'
      .info= 'Following: {{ user.following }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'UserDetails',
  props: {
    login: { type: String, required: true },
  },
  computed: {
    imgAvatarAlt() {
      return `${this.login} avatar`;
    },
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

<style lang="scss" scoped>
@import "../css/_variables";

.component {
  margin: 0 0 $base-size;
}

.title {
  border-bottom: 1px solid #ccc;
}

.avatar {
  background: #eee;
  border: 1px solid #ccc;
  height: auto;
  max-width: 100%;
  width: ($base-size * 16);
}

.info {
  border-bottom: 1px solid #ccc;
  padding: ($base-size / 4) 0;
}
</style>
