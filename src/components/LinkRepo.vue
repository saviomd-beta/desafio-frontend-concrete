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
@import "../css/_variables";

.repo {
  border: 1px solid #ccc;
  border-radius: ($base-size / 2);
  color: #333;
  display: block;
  font-weight: normal;
  padding: ($base-size / 2) $base-size;
  transition: $base-speed;
  &:focus,
  &:hover {
    background: #eee;
    color: #333;
    text-decoration: none;
  }
}

.repo__name {
  color: $color-primary;
  font-size: ($base-size * 1.2);
  font-weight: bold;
  .repo:focus &,
  .repo:hover & {
    color: $color-primary-light;
  }
}

.repo__description {
  color: #666;
}

.repo__details {
  font-size: ($base-size * 0.8);
  margin-top: $base-size;
}
</style>
