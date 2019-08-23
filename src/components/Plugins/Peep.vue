<template>
  <div class="plugin-peep pb-12">
    <div class="grid-container one-eleven">
      <div class="flex justify-end items-start">
        <Score :score="plugin.score"/>
      </div>
      <div class="col">
        <div class="row">
          <h2 class="text-primary leading-tight inline">{{ plugin.name }}</h2>
          <span class="ml-3 text-gray-600 uppercase">{{ plugin.lastReleaseTagName }}</span>
        </div>
        <div class="row">
          <p class="text-gray-500 font-normal inline text-lg">{{ plugin.description }}</p>
          <Tag
            :tag="tag"
            :key="tag"
            v-for="tag in plugin.tags"
          />
        </div>
        <div class="row">
          <span class="mr-2 text-black font-bold">⭐️ {{plugin.numStars | inThousands }}</span>
          <span class="mx-2 text-black font-bold">👥 {{plugin.numContributors}}</span>
          <span class="mx-2 text-black font-bold">
            🏷 {{plugin.lastReleaseDate | moment("YYYY-MM-DD")}}
          </span>
          <span class="ml-4 mr-2 text-gray-500 text-sm">Last 30 days:</span>
          <span class="mx-2 text-black font-normal">
            ⬇ {{plugin.numDownloadsRecently | withCommas}}
          </span>
          <span class="mx-2 text-black font-normal">📝 {{plugin.numCommitsRecently}}</span>
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
  },
};
</script>
<style lang="scss" scoped>
  .row {
    @apply my-1;
  }
</style>
