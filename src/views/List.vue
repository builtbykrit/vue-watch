<template>
  <div class="content-container">
    <div class="list grid-container one-four my-12 px-4">
      <div class="tag-list">
        <p class="mb-6 mx-1 text-gray-500 font-medium text-lg">Tags</p>
        <TagList :tags="tags" @tagClicked="handleTagClicked"/>
      </div>
      <div v-if="plugins.length > 0">
        <div class="mb-2">
          <Count
            :count='pluginCount'
            v-if="plugins.length > 0"
          />
        </div>
        <Peep :key="plugin.id" :plugin='plugin' v-for="plugin in plugins"/>
        <div class="flex-1 justify-center items-center" v-if='next && loadingPlugins'>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Count from '@/components/Plugins/Count.vue';
import Peep from '@/components/Plugins/Peep.vue';
import TagList from '@/components/Plugins/TagList.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'List',
  components: {
    Count,
    Peep,
    Spinner,
    TagList,
  },
  mounted() {
    this.scroll();
  },
  computed: {
    ...mapGetters([
      'loadingPlugins',
      'next',
      'pluginCount',
      'plugins',
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
      'fetchNext',
      'fetchPlugins',
      'fetchTags',
      'searchPlugins',
      'fetchPluginsByTag',
    ]),
    handleTagClicked(tagName) {
      this.fetchPluginsByTag(tagName);
    },
    scroll() {
      window.onscroll = () => {
        const atThreeFourths = document
          .documentElement
          .scrollTop + window.innerHeight >= (
          document.documentElement.offsetHeight * 0.75
        );

        if (atThreeFourths && this.next && !this.loadingPlugins) {
          this.fetchNext();
        }
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @include respond-below(md) {
    .one-four {
      grid-template-columns: 1fr !important;
    }
    .tag-list {
      display: none;
    }
  }
</style>
