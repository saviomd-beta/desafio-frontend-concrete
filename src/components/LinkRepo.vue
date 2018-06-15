<template lang="pug">
  router-link.repo(:to='targetRoute')
    .repo__name= '{{ repository.name }}'
    .repo__description(v-if='repository.description')= '{{ repository.description }}'
    .repo__details
      = 'Stars: {{ repository.stargazers_count }}'
      span(v-if='repository.language')= ' - Language: {{ repository.language }}'
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

<style lang="scss" scoped>
.repo {
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #333;
  display: block;
  font-weight: normal;
  padding: 5px 10px;
  transition: 0.3s;
  &:focus,
  &:hover {
    background: #eee;
    color: #333;
    text-decoration: none;
  }
}

.repo__name {
  font-size: 18px;
  font-weight: bold;
}

.repo__description {
  margin-bottom: 10px;
}

.repo__details {
  font-size: 14px;
}
</style>
