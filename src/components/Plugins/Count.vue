<template>
  <p class="text-blue-100 text-lg font-medium">{{ String(count) | withCommas }} Plugins</p>
</template>
<script>
export default {
  name: 'Count',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>
