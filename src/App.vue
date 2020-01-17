<template>
  <div id="app">
    <Header @searchUpdated="search" />
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import _ from 'lodash';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    ...mapActions([
      'searchPlugins',
    ]),
    search(search) {
      const self = this;
      const t = _.throttle(() => {
        self.searchPlugins(search);
        // Track search event
        self.$ga.event({
          eventCategory: 'Search Bar',
          eventAction: 'search',
          eventLabel: search,
        });
      }, 1500, { trailing: false });

      t();
    },
  },
};
</script>
<style lang="scss">
</style>
