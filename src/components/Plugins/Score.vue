<template>
  <div
    :class="scoreClasses"
    class="score">
    {{ score }}
  </div>
</template>
<script>
export default {
  name: 'Score',
  computed: {
    scoreClasses() {
      switch (this.score) {
        case 10:
        case 9:
          return 'bg-primary';
        case 8:
        case 7:
          return 'bg-green-100';
        case 6:
        case 5:
          return 'bg-yellow-100';
        case 4:
        case 3:
          return 'bg-orange-100';
        case 2:
        case 1:
          return 'bg-red-100';
        case 0:
          return 'bg-black';
        default:
          return 'bg-gray-500';
      }
    },
  },
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
  .score {
    @apply flex items-center justify-center text-white rounded font-bold text-2xl p-3 mt-4;
    height: 3rem;
    width: 3.5rem;
  }
</style>
