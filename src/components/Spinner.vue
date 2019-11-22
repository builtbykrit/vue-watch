<template>
  <self-building-square-spinner
    :animation-duration="6000"
    :size="40"
    color="#42B983"
  />
</template>
<script>
import { SelfBuildingSquareSpinner } from 'epic-spinners';

export default {
  name: 'Spinner',
  components: {
    SelfBuildingSquareSpinner,
  },
};
</script>
<style lang="scss" scoped>
  .self-building-square-spinner {
    margin: auto;
  }
</style>
