<template lang="pug">
  footer.container
    = 'Powered by '
    a(href='https://developer.github.com/v3/', target='_blank')= 'GitHub API v3'
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" scoped>
@import "../css/_variables";

footer {
  border-top: 1px solid #ccc;
  font-size: ($base-size * 0.8);
  padding: $base-size;
  text-align: center;
}
</style>
