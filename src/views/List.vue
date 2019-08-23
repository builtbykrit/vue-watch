<template>
  <div class="list">
    <p>List</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'list',
  created() {
    this.fetchPlugins();
  },
  methods: {
    ...mapActions([
      'fetchPlugins',
    ]),
  },
};
</script>
