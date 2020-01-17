<template>
  <div class="score-item grid-container two-rem--one">
    <div class="icon pt-1">
      <span v-if="score">✅</span>
      <span v-else>❌</span>
    </div>
    <div class="text">
      <h3 class="text-black">{{name}}</h3>
      <p>{{description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScoreItem',
  props: {
    description: String,
    name: String,
    score: Boolean,
  },
};
</script>

<style scoped lang="scss">
  h3 {
    @apply text-lg font-semibold;
  }
</style>
