<template lang="pug">
  form(@submit='submitUserSearch')
    input(placeholder='Type a username...', required, type='text', v-model='searchString')
    button(type='submit')= 'Search'
</template>

<script>
import store from '@/store';

export default {
  name: 'FormUserSearch',
  data() {
    return {
      searchString: this.$route.query.q || '',
    };
  },
  methods: {
    submitUserSearch(event) {
      event.preventDefault();
      const searchString = this.searchString.trim().toLowerCase();
      store.dispatch('searchUsers/fetchData', searchString);
    },
  },
};
</script>
