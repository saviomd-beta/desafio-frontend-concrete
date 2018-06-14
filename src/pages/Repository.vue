<template lang="pug">
  repo-details(:login='login', :name='name')
</template>

<script>
import RepoDetails from '@/components/RepoDetails';

export default {
  name: 'Repository',
  components: {
    'repo-details': RepoDetails,
  },
  computed: {
    login() {
      return this.$route.params.login;
    },
    name() {
      return this.$route.params.name;
    },
  },
};
</script>
