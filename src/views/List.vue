<template>
  <div class="list grid-container one-four-one my-16 px-4">
    <div class="tag">
      <p class="mb-6 mx-1 text-gray-500 font-medium text-lg">Tags</p>
      <TagList :tags="['State Management', 'UI Utility', 'Time & Date']" />
    </div>
    <div v-if="pluginsSortedByScore.length > 0">
      <div class="mb-2">
        <Count
          :count='pluginCount'
          v-if="pluginsSortedByScore.length > 0"
        />
      </div>
      <Peep :key="plugin.id" :plugin='plugin' v-for="plugin in pluginsSortedByScore"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Count from '@/components/Plugins/Count.vue';
import Peep from '@/components/Plugins/Peep.vue';
import TagList from '@/components/Plugins/TagList.vue';

export default {
  name: 'List',
  components: {
    Count,
    Peep,
    TagList,
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
