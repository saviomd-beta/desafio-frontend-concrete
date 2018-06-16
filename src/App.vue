<template lang="pug">
  #app
    app-header
    .container.content
      router-view
    app-footer
</template>

<script>
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';

export default {
  name: 'App',
  components: {
    'app-footer': AppFooter,
    'app-header': AppHeader,
  },
};
</script>
