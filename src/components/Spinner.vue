<template>
  <self-building-square-spinner
    :animation-duration="6000"
    :size="40"
    color="#ff1d5e"
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
