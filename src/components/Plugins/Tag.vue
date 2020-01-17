<template>
  <div
    class="tag">
    <a href="#" @click="tagClicked(tag)">{{ tag }}</a>
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
  methods: {
    tagClicked(tagName) {
      this.$emit('tagClicked', tagName);
    },
  },
};
</script>
<style lang="scss" scoped>
  .tag {
    @apply inline-block rounded-full text-primary mx-1 font-semibold;
    background: rgba(66,185,131, .125);
    padding: 0.45rem 0.75rem;
  }

</style>
