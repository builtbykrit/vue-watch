<template>
  <div class="list w-2/3 m-auto my-32">
    <div class="mb-2">
      <Count
        :count='pluginCount'
        v-if="pluginsSortedByScore.length > 0"
      />
    </div>
    <div v-if="pluginsSortedByScore.length > 0">
      <Peep :key="plugin.id" :plugin='plugin' v-for="plugin in pluginsSortedByScore"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Count from '@/components/Plugins/Count.vue';
import Peep from '@/components/Plugins/Peep.vue';

export default {
  name: 'List',
  components: {
    Count,
    Peep,
  },
  computed: {
    ...mapGetters([
      'pluginCount',
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
