<template>
  <div
    class="tag-list">
    <div class="block mb-4" v-for="tag in tags" :key="tag">
      <Tag :tag='tag' @tagClicked="tagClicked"/>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
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
