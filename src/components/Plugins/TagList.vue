<template>
  <div
    class="tag-list">
    <div class="block mb-4" v-for="tag in tags" :key="tag">
      <Tag :tag='tag' @tagClicked="tagClicked"/>
    </div>
  </div>
</template>
<script>
import Tag from './Tag.vue';

export default {
  name: 'TagList',
  components: {
    Tag,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    tagClicked(tagName) {
      this.$emit('tagClicked', tagName);
    },
  },
};
</script>
