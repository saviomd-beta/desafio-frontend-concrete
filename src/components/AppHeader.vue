<template lang="pug">
  header.container
    router-link(to='/')= 'Github user search'
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
header {
  background: #000;
  color: #eee;
  padding: 10px;
}

a {
  color: #fff;
  font-size: 18px;
}
</style>
