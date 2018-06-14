<template lang="pug">
  div
    h1= 'Page not found'
    p= `This page doesn't exist!`
    router-link(to='/')= 'Go to homepage'
</template>

<script>

export default {
  name: 'NotFound',
};
</script>
