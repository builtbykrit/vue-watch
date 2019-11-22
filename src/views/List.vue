<template>
  <div class="list grid-container one-four-one my-12 px-4">
    <div class="tag">
      <p class="mb-6 mx-1 text-gray-500 font-medium text-lg">Tags</p>
      <TagList :tags="tags" />
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
    <div>
      <div class="bg-gray-100 rounded p-6">
        <p class="text-gray-500 font-bold mb-4">
          Find the best Vue plugins to use on your project.
        </p>
        <a class="block text-green-600 mb-2"
           href="#">
          Scoring explained
        </a>
        <a class="block text-green-600 mb-2"
           href="#">
          Submit a plugin
        </a>
        <a class="block text-green-600"
           href="#">
          About this site
        </a>
      </div>
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
      'tags',
    ]),
  },
  created() {
    this.fetchPlugins();
    this.fetchTags();
  },
  methods: {
    ...mapActions([
      'fetchPlugins',
      'fetchTags',
    ]),
  },
};
</script>
