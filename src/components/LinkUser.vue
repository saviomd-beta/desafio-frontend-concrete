<template lang="pug">
  router-link(:to='targetRoute')
    img(:alt='user.login_avatar', :src='user.avatar_url', width='32')
    = ' {{ user.login }}'
</template>

<script>
export default {
  name: 'LinkUser',
  props: {
    user: { type: Object, required: true },
  },
  computed: {
    targetRoute() {
      return {
        name: 'User',
        params: {
          login: this.user.login,
        },
      };
    },
  },
};
</script>
