<template>
  <div
    class="tag">
    <span>{{ tag }}</span>
  </div>
</template>
<script>
export default {
  name: 'Tag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
  .tag {
    @apply inline-block rounded-full text-primary mx-1 font-medium;
    background: rgba(66,185,131, .125);
    padding: 0.33rem 0.66rem;
  }
</style>
