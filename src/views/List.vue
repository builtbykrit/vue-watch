<template>
  <div class="list w-2/3 m-auto my-12">
    <div v-if="pluginsSortedByScore.length > 0">
      <Peep :key="plugin.id" :plugin='plugin' v-for="plugin in pluginsSortedByScore"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Peep from '@/components/Plugins/Peep.vue';

export default {
  name: 'List',
  components: {
    Peep,
  },
  computed: {
    ...mapGetters([
      'plugins',
      'pluginsSortedByScore',
    ]),
  },
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
