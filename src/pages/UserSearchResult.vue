<template lang="pug">
  div
    form-user-search
    user-search-result
</template>

<script>
import FormUserSearch from '@/components/FormUserSearch';
import UserSearchResult from '@/components/UserSearchResult';

export default {
  name: 'UserSearchResult',
  components: {
    'form-user-search': FormUserSearch,
    'user-search-result': UserSearchResult,
  },
};
</script>
