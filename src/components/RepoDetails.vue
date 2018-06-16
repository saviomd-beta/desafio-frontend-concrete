<template lang="pug">
  div
    h1.title
      router-link(:to='targetRoute')= '{{ login }}'
      = '/{{ name }}'
    .wrapper
      .main
        .description(v-if='repository.description')= '{{ repository.description }}'
        a.btn.btn--secondary(:href='repository.html_url', target='_blank')= 'View on GitHub'
      .sidebar
        .info
          div= 'Stars: {{ repository.stargazers_count }}'
          div= 'Language: {{ repository.language }}'
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

<style lang="scss" scoped>
@import "../css/_variables";

.description {
  font-size: ($base-size * 1.2);
  margin-bottom: $base-size;
}

.info {
  border: 1px solid #ccc;
  border-radius: ($base-size / 2);
  padding: $base-size;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 (-$base-size);
}

.main {
  padding: 0 $base-size;
  width: 100%;
  @media (min-width: $screen-md) {
    width: percentage(8/12);
  }
}

.sidebar {
  padding: 0 $base-size;
  width: 100%;
  @media (min-width: $screen-md) {
    width: percentage(4/12);
  }
}

</style>
