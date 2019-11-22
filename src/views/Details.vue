<template>
  <div class="grid-container one-four-one bg-gray-900">
    <router-link
      class="flex self-start items-center text-blue-200 pl-12 pt-4"
      to="/">
      <svg class="fill-current mr-2" width="6" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- eslint-disable-next-line -->
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75.34a1 1 0 01-.1 1.41L2.53 4.5l3.14 2.75a1 1 0 11-1.32 1.5l-4-3.5a1 1 0 010-1.5l4-3.5a1 1 0 011.41.1z"/>
      </svg>
      <span>
        View all plugins
      </span>
    </router-link>
    <Peep v-for="plugin in firstPlugin"
          :plugin='plugin'
          :isDetail="true"
          :key="plugin.id"/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Peep from '@/components/Plugins/Peep.vue';

export default {
  name: 'Details',
  components: {
    Peep,
  },
  data() {
    return {
      firstPlugin: [],
    };
  },
  computed: {
    ...mapGetters([
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
  watch: {
    pluginsSortedByScore(pluginsList) {
      this.firstPlugin.push(pluginsList[0]);
    },
  },
};
</script>
