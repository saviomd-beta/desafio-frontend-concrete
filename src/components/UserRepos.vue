<template lang="pug">
  div
    h2= 'Repositories'
    ul
      li(v-for='repository in repositories',
        :key='repository.name', :value='repository.name'
      )
        link-repo(:repository='repository')
</template>

<script>
import LinkRepo from '@/components/LinkRepo';
import store from '@/store';

export default {
  name: 'UserRepos',
  props: {
    login: { type: String, required: true },
  },
  components: {
    'link-repo': LinkRepo,
  },
  computed: {
    repositories() {
      return store.state.userRepos.repositories;
    },
  },
  mounted: function mounted() {
    store.dispatch('userRepos/fetchData', this.login);
  },
};
</script>
