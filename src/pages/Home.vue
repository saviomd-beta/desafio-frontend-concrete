<template lang="pug">
  div
    form-user-search
</template>

<script>
import FormUserSearch from '@/components/FormUserSearch';

export default {
  name: 'Home',
  components: {
    'form-user-search': FormUserSearch,
  },
};
</script>
