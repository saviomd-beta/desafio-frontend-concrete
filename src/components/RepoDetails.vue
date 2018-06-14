<template lang="pug">
  div
    h1
      router-link(:to='targetRoute')= '{{ login }}'
      = '/{{ name }}'
</template>

<script>
export default {
  name: 'RepoDetails',
  props: {
    login: { type: String, required: true },
    name: { type: String, required: true },
  },
  computed: {
    targetRoute() {
      return {
        name: 'User',
        params: {
          login: this.login,
        },
      };
    },
  },
};
</script>
