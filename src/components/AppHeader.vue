<template lang="pug">
  header.container
    router-link(to='/')= 'GitHub User Search'
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
@import "../css/_variables";

header {
  background: #000;
  color: #eee;
  padding: $base-size;
}

a {
  color: #fff;
  font-size: ($base-size * 1.2);
}
</style>
