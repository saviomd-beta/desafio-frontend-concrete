<template lang="pug">
  div= '{{ login }}'
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    login: { type: String, required: true },
  },
};
</script>
