<template>
  <div class="content-container pt-6 pb-12">
    <div class="grid-container two-one mt-6">
      <div class="about-content py-2">
        <h1 class="font-semibold">Find the best plugins for your Vue projects</h1>
        <p>Vue Watch is collection of actively-maintained Vue plugins,
          built for easy assessment and comparision. It's heavily inspired by
          <a href="https://emberobserver.com/" target="_blank">Ember Observer</a>.
          We (<a href="https://krit.com/" target="_blank">Krit</a>) built Vue Watch
          because we've seen the value Ember Observer brings in our experience building
          Ember applications. When we started working on Vue projects, we noticed that
          There wasn't a great site out there cataloging and scoring plugins in a
          clean, easy to search way.
        </p>

        <h2 class="mt-6 mb-1">Scoring</h2>
        <p>Plugins are scored with a combination of manual and automated boolean criteria.
          The score is calculated by adding a point for each criteria,
          with <span class="font-semibold">10</span> being the highest possible score.</p>
        <div class="grid-container one-one mt-6">
          <div class="manual-review">
            <h3 class="mb-3">Manual Review</h3>

            <!-- Meaningful Tests -->
            <ScoreItem name="Meaningful Tests"
                       :score="true"
                       description="Are there any meaningful tests
                           that weren't auto generated?"></ScoreItem>

            <!-- Example Code -->
            <ScoreItem name="Example Code"
                       :score="true"
                       description="Does the README/docs contain code examples usage on
                      how to implement the plugin?"></ScoreItem>

            <!-- API Documentation -->
            <ScoreItem name="API Documentation"
                       :score="true"
                       description="Can you see all available options/values for usage?">
            </ScoreItem>

            <!-- CI Setup -->
            <ScoreItem name="CI Setup"
                       :score="true"
                       description="Is there a continuous integration build set up
                           (passing or not) that includes meaningful tests?"></ScoreItem>
          </div>

          <div class="automated-scoring">
            <h3 class="mb-3">Automated Scoring</h3>

            <!-- Recent Release -->
            <ScoreItem name="Recent Release"
                       :score="true"
                       description="Has there a been a new release
                           in the last year?"></ScoreItem>

            <!-- Recent Commits -->
            <ScoreItem name="Recent Commits"
                       :score="true"
                       description="Has there been more than five
                            commits in the last three months?"></ScoreItem>

            <!-- Multiple Contributors -->
            <ScoreItem name="Multiple Contributors"
                       :score="true"
                       description="Is there more than one contributor
                            on the project?"></ScoreItem>

            <!-- Many Contributors -->
            <ScoreItem name="Many Contributors"
                       :score="true"
                       description="Are there more than seven
                           contributors on the project?"></ScoreItem>

            <!-- Recent Downloads -->
            <ScoreItem name="Recent Downloads"
                       :score="true"
                       description="Is the download count in the last 30 days
                           in the top 10% of plugins?"></ScoreItem>

            <!-- Star Status -->
            <ScoreItem name="Star Status"
                       :score="true"
                       description="Is the Github star count in the
                           top 10% of plugins?"></ScoreItem>
          </div>
        </div>

        <h2 class="mt-6 mb-1">Built By Krit</h2>
        <p>This site is built and maintained by
          <a href="https://krit.com/" target="_blank">Krit</a>,
          a product design and development agency.</p>
      </div>

      <div class="sidebar">
        <div class="bg-gray-100 px-6 py-6 rounded text-black">
          <h2 class="mb-2">Submit a plugin</h2>
          <p>Notice a plugin missing? Email us at <a href="mailto:hello@krit.com">hello@krit.com</a>
          with a link to the repo and we'll get it added.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreItem from '@/components/Plugins/ScoreItem.vue';

export default {
  name: 'About',
  components: {
    ScoreItem,
  },
};
</script>

<style scoped lang="scss">
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-2xl font-semibold;
  }
  .score-item {
    @apply my-3;
  }
</style>
