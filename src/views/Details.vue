<template>
  <div class="plugin-details" v-if="plugin">
    <div class="pugin-header bg-gray-900">
      <div class="content-container">
        <div class="grid-container one-four-one">
          <router-link
            class="flex self-start items-center text-blue-200 pt-4 hover:text-white"
            :to="{name: 'list'}">
            <svg class="fill-current mr-2" width="6" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- eslint-disable-next-line -->
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75.34a1 1 0 01-.1 1.41L2.53 4.5l3.14 2.75a1 1 0 11-1.32 1.5l-4-3.5a1 1 0 010-1.5l4-3.5a1 1 0 011.41.1z"/>
            </svg>
            <span>
              View all plugins
            </span>
          </router-link>
          <Peep :plugin='plugin'
                :isDetail="true"
                :key="plugin.id"/>
        </div>
      </div>
    </div>
    <div class="content-container" v-if="plugin">
      <div class="grid-container one--thirty-rem mt-6">
        <div class="main-content">
          <div class="tags-section">
            <h2>Tags</h2>
            <div class="tags-list mt-4">
              <Tag
                :tag="tag"
                :key="tag"
                v-for="tag in plugin.tags"
              />
            </div>
          </div>
          <div class="score-section mt-6">
            <h2>Score</h2>
            <p>Plugins are scored with a combination of manual and automated boolean criteria.
              The score is calculated by adding a point for each criteria, with10 being the highest
              possible score.</p>
            <div class="grid-container one-one mt-6">
              <div class="manual-review">
                <h3 class="mb-3">Manual Review</h3>

                <!-- Meaningful Tests -->
                <ScoreItem name="Meaningful Tests"
                           :score="plugin.hasMeaningfulTests"
                           description="Are there any meaningful tests
                           that weren't auto generated?"></ScoreItem>

                <!-- Example Code -->
                <ScoreItem name="Example Code"
                           :score="plugin.hasExampleCode"
                           description="Does the README/docs contain code examples usage on
                      how to implement the plugin?"></ScoreItem>

                <!-- API Documentation -->
                <ScoreItem name="API Documentation"
                           :score="plugin.hasApiDocumented"
                           description="Can you see all available options/values for usage?">
                </ScoreItem>

                <!-- CI Setup -->
                <ScoreItem name="CI Setup"
                           :score="plugin.hasCi"
                           description="Is there a continuous integration build set up
                           (passing or not) that includes meaningful tests?"></ScoreItem>
              </div>

              <div class="automated-scoring">
                <h3 class="mb-3">Automated Scoring</h3>

                <!-- Recent Release -->
                <ScoreItem name="Recent Release"
                           :score="plugin.hasRecentRelease"
                           description="Has there a been a new release
                           in the last year?"></ScoreItem>

                <!-- Recent Commits -->
                <ScoreItem name="Recent Commits"
                           :score="plugin.hasRecentCommits"
                           description="Has there been more than five
                            commits in the last three months?"></ScoreItem>

                <!-- Multiple Contributors -->
                <ScoreItem name="Multiple Contributors"
                           :score="plugin.hasMultipleContributors"
                           description="Is there more than one contributor
                            on the project?"></ScoreItem>

                <!-- Many Contributors -->
                <ScoreItem name="Many Contributors"
                           :score="plugin.hasManyContributors"
                           description="Are there more than seven
                           contributors on the project?"></ScoreItem>

                <!-- Recent Downloads -->
                <ScoreItem name="Recent Downloads"
                           :score="plugin.hasRecentDownloads"
                           description="Is the download count in the last 30 days
                           in the top 10% of plugins?"></ScoreItem>

                <!-- Star Status -->
                <ScoreItem name="Star Status"
                           :score="plugin.hasStarStatus"
                           description="Is the Github star count in the
                           top 10% of plugins?"></ScoreItem>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="bg-gray-100 px-6 py-6 rounded text-black">

            <div class="stats my-5">
              <h2>Stats</h2>
              <p class="text-black my-3">🏷️
                <span class="font-semibold">{{plugin.lastReleaseTagName}}</span>
                released <span class="font-semibold">{{plugin.lastReleaseDate}}</span>
              </p>
              <p class="text-black font-semibold my-3">
                <span class="inline-block mr-6">⭐ {{plugin.numStars | withCommas}} stars</span>
                <span class="inline-block">👥  {{plugin.numContributors | withCommas}} stars</span>
              </p>
              <p class="text-black font-semibold my-3">
                📝 {{plugin.numCommitsRecently}} commits past 30 days
              </p>
            </div>

            <div class="links">
              <a class="block" :href="`${plugin.repoUrl}`" target="_blank">{{plugin.repoUrl}}</a>
              <p class="text-black mt-3">📃 {{plugin.repoLicenseName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Peep from '@/components/Plugins/Peep.vue';
import ScoreItem from '@/components/Plugins/ScoreItem.vue';
import Tag from '@/components/Plugins/Tag.vue';

export default {
  name: 'Details',
  components: {
    Peep,
    ScoreItem,
    Tag,
  },
  computed: {
    ...mapGetters([
      'plugin',
    ]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchPlugin(id);
  },
  methods: {
    ...mapActions([
      'fetchPlugin',
    ]),
  },
};
</script>


<style scoped lang="scss">
  h2 {
    @apply text-2xl font-semibold mb-2 text-gray-900;
  }
  .score-item {
    @apply my-3;
  }
  .one--thirty-rem {
    grid-gap: 5rem;
  }

  @media (max-width: 750px) {
    .one--thirty-rem {
      grid-template-columns: 1fr !important;
    }
    .one-four-one {
      grid-template-columns: 1fr !important;
    }
  }
</style>
