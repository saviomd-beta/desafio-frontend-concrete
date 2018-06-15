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
footer {
  border-top: 1px solid #ccc;
  font-size: 14px;
  padding: 10px;
  text-align: center;
}
</style>
