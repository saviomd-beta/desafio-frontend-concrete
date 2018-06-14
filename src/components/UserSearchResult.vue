<template lang="pug">
  ul
    li(v-for='item in items', :key="item.id", :value="item.id")= '{{ item.login }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'UserSearchResult',
  computed: {
    items() {
      return store.state.searchUsers.items;
    },
  },
  mounted: function mounted() {
    store.dispatch('searchUsers/fetchData', this.$route.query.q);
  },
};
</script>
