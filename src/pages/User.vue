<template lang="pug">
  .page
    user-details.sidebar(:login='login')
    user-repos.main(:login='login')
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

<style lang="scss" scoped>
@import "../css/_variables";

.page {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -$base-size;
  padding: ($base-size * 2) 0;
}

.main {
  padding: 0 $base-size;
  width: 100%;
  @media (min-width: $screen-sm) {
    width: percentage(7/12);
  }
  @media (min-width: $screen-md) {
    width: percentage(8/12);
  }
  @media (min-width: $screen-lg) {
    width: percentage(9/12);
  }
}

.sidebar {
  padding: 0 $base-size;
  width: 100%;
  @media (min-width: $screen-sm) {
    width: percentage(5/12);
  }
  @media (min-width: $screen-md) {
    width: percentage(4/12);
  }
  @media (min-width: $screen-lg) {
    width: percentage(3/12);
  }
}
</style>
