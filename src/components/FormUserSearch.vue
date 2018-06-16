<template lang="pug">
  form.form(@submit='submitUserSearch')
    input.form__control(placeholder='Type a username...', required,
      type='text', v-model='searchString')
    button.btn.btn--primary(type='submit')= 'Search'
</template>

<script>
import router from '@/router';
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
      store.dispatch('searchUsers/fetchData', searchString).then(() => {
        router.push({ name: 'UserSearchResult', query: { q: searchString } });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
}

.form__control {
  flex-grow: 1;
  width: auto;
}
</style>
