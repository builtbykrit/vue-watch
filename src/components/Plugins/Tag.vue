<template>
  <div
    class="tag">
    <a href="#" @click="tagClicked(tag)">
      {{ tag }}
      <span v-if="isSelectedTag">X</span>
    </a>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Tag',
  props: {
    tag: {
      type: String,
      required: true,
    },
    isSelectedTag: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      'selectedTag',
    ]),
  },
  methods: {
    ...mapActions([
      'setSelectedTag',
    ]),
    tagClicked(tagName) {
      this.setSelectedTag(tagName);
      this.$emit('tagClicked', tagName);
    },
  },
};
</script>
<style lang="scss" scoped>
  .tag {
    @apply inline-block rounded-full text-primary mx-1 font-semibold;
    background: rgba(66,185,131, .125);
    padding: 0.25rem 1rem;
  }

</style>
