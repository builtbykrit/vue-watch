<template>
  <div class="plugin-peep pb-12">
    <div class="grid-container fourty-five--eleven">
      <div class="flex justify-end items-start">
        <Score :score="plugin.score"/>
      </div>
      <div class="col">
        <div class="row">
          <router-link
            v-if="!isDetail"
            :to="{name: 'details', params: { id: plugin.id} }">
            <h2 class="leading-tight inline hover:underline"
                :class="[
              {'text-white text-5xl': isDetail},
              {'text-primary text-3xl': !isDetail}
              ]">{{ plugin.name }}</h2>
          </router-link>
          <h2 v-else
              class="leading-tight inline"
              :class="[
              {'text-white text-5xl': isDetail},
              {'text-primary text-3xl': !isDetail}
              ]">{{ plugin.name }}</h2>
          <template v-if="!isDetail">
            <span class="ml-3 text-gray-600 uppercase">{{ plugin.lastReleaseTagName }}</span>
          </template>
        </div>
        <div class="row mt-0">
          <p class="text-gray-500 font-normal inline text-lg">{{ plugin.description }}</p>
          <template v-if="!isDetail">
            <Tag
              :tag="tag"
              :key="tag"
              @tagClicked="handleTagClicked"
              v-for="tag in plugin.tags"
            />
          </template>
        </div>
        <div class="row pt-2"
             :class="[
             {'text-white': isDetail},
             {'text-black': !isDetail},
             ]">
          <span class="mr-2 font-semibold">⭐️ {{plugin.numStars | inThousands }}</span>
          <span class="mx-2 font-semibold">👥 {{plugin.numContributors}}</span>
          <span class="mx-2 font-semibold" v-if="plugin.lastReleaseDate">
            🏷 {{plugin.lastReleaseDate | moment("YYYY-MM-DD")}}
          </span>
          <span class="ml-4 mr-2 text-gray-500 text-sm">Last 90 days:</span>
          <span class="mx-2 font-semibold">
            ⬇️ {{plugin.numDownloadsRecently | withCommas}}
          </span>
          <span class="mx-2 font-semibold">📝 {{plugin.numCommitsRecently}}</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Score from './Score.vue';
import Tag from './Tag.vue';

export default {
  components: {
    Score,
    Tag,
  },
  name: 'Peep',
  props: {
    plugin: {
      type: Object,
      required: true,
    },
    /**
     * Determines whether the tags should be displayed
     */
    isDetail: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleTagClicked(tagName) {
      this.$emit('tagClicked', tagName);
    },
  },
};
</script>
<style lang="scss" scoped>
  .row {
    @apply my-1;
  }
</style>
