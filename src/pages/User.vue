<template lang="pug">
  div
    user-details(:login='login')
    user-repos(:login='login')
</template>

<script>
import UserDetails from '@/components/UserDetails';
import UserRepos from '@/components/UserRepos';

export default {
  name: 'User',
  components: {
    'user-details': UserDetails,
    'user-repos': UserRepos,
  },
  computed: {
    login() {
      return this.$route.params.login;
    },
  },
};
</script>
