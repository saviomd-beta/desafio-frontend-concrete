<template lang="pug">
  router-link(:to='targetRoute')
    div= '{{ repository.name }}'
    div= '{{ repository.description }}'
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
        name: 'Home',
      };
    },
  },
};
</script>
