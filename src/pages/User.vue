<template lang="pug">
  user-details(:login='login')
</template>

<script>
import UserDetails from '@/components/UserDetails';

export default {
  name: 'User',
  components: {
    'user-details': UserDetails,
  },
  computed: {
    login() {
      return this.$route.params.login;
    },
  },
};
</script>
