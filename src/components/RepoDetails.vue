<template lang="pug">
  div
    h1
      router-link(:to='targetRoute')= '{{ login }}'
      = '/{{ name }}'
    div(v-if='repository.description')= '{{ repository.description }}'
    div= 'Stars: {{ repository.stargazers_count }}'
    div= 'Language: {{ repository.language }}'
    a.btn.btn--secondary(:href='repository.html_url', target='_blank')= 'View on GitHub'
</template>

<script>
import store from '@/store';

export default {
  name: 'RepoDetails',
  props: {
    login: { type: String, required: true },
    name: { type: String, required: true },
  },
  computed: {
    repository() {
      return store.state.repos.repository;
    },
    targetRoute() {
      return {
        name: 'User',
        params: {
          login: this.login,
        },
      };
    },
  },
  mounted: function mounted() {
    const fullName = `${this.login}/${this.name}`;
    store.dispatch('repos/fetchData', fullName);
  },
};
</script>
