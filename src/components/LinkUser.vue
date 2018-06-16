<template lang="pug">
  router-link.user(:to='targetRoute')
    img.user__avatar(:alt='user.login_avatar', :src='user.avatar_url', width='32')
    = ' {{ user.login }}'
</template>

<script>
export default {
  name: 'LinkUser',
  props: {
    user: { type: Object, required: true },
  },
  computed: {
    targetRoute() {
      return {
        name: 'User',
        params: {
          login: this.user.login,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/_variables";

.user {
  border: 1px solid #ccc;
  border-radius: ($base-size / 2);
  color: $color-primary;
  display: block;
  line-height: ($base-size * 2);
  padding: ($base-size / 2) $base-size;
  transition: 0.3s;
  &:focus,
  &:hover {
    background: #eee;
    color: $color-primary-light;
    text-decoration: none;
  }
}

.user__avatar {
  background: #eee;
  border: 1px solid #ccc;
  height: ($base-size * 2);
  vertical-align: middle;
  width: ($base-size * 2);
}
</style>
