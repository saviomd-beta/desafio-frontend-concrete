<template lang="pug">
  ul
    li(v-for='item in items', :key='item.login')
      link-user(:user='item')
</template>

<script>
import LinkUser from '@/components/LinkUser';
import store from '@/store';

export default {
  name: 'UserSearchResult',
  components: {
    'link-user': LinkUser,
  },
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

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0 0 10px;
  padding: 0;
}

ul > li {
  margin-bottom: 10px;
}
</style>
