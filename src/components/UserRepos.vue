<template lang="pug">
  div
    h2.title.title--sub= 'Repositories ({{ repositories.length }})'
    .order-by
      = 'Order by '
      select.form__control(v-model='currentRepoOrder')
        option(v-for='repoOrder in repoOrders', :key='repoOrder.id', :value='repoOrder.id')
          = '{{ repoOrder.name }}'
    ul
      li(v-for='repository in repositories', :key='repository.name')
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
  data() {
    return {
      currentRepoOrder: 'stargazers_count',
      repoOrders: [
        { id: 'stargazers_count', name: 'Stars' },
        { id: 'name', name: 'Name' },
        { id: 'language', name: 'Language' },
      ],
    };
  },
  computed: {
    repositories() {
      if (this.currentRepoOrder === 'stargazers_count') {
        return store.getters['userRepos/repositoriesByStars'];
      } else if (this.currentRepoOrder === 'name') {
        return store.getters['userRepos/repositoriesByName'];
      } else if (this.currentRepoOrder === 'language') {
        return store.getters['userRepos/repositoriesByLanguage'];
      }
      return store.state.userRepos.repositories;
    },
  },
  mounted: function mounted() {
    store.dispatch('userRepos/fetchData', this.login);
  },
};
</script>

<style lang="scss" scoped>
@import "../css/_variables";

.order-by {
  font-size: ($base-size * 0.8);
  margin: 0 0 $base-size;
  text-align: right;
}

ul {
  list-style: none;
  margin: 0 0 $base-size;
  padding: 0;
}

ul > li {
  margin: 0 0 $base-size;
}
</style>
