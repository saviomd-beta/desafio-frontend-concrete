<template lang="pug">
  router-link(:to='targetRoute')
    div= '{{ repository.name }}'
    div= '{{ repository.description }}'
    div= 'Language: {{ repository.language }}'
    div= 'Stars: {{ repository.stargazers_count }}'
</template>

<script>
export default {
  name: 'LinkRepo',
  props: {
    repository: { type: Object, required: true },
  },
  computed: {
    targetRoute() {
      return {
        name: 'Repository',
        params: {
          login: this.$route.params.login,
          name: this.repository.name,
        },
      };
    },
  },
};
</script>
