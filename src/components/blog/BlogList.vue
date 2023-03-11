<template>
  <div>
    <BlogItem :blogList="blogList" />
    <!-- pageNum -->
    <div></div>
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";
export default {
  name: "BlogList",
  props: {
    blogList: {
      type: Array,
      required: true,
    },
  },
  components: {
    BlogItem,
  },
};
</script>

<style scoped>
</style>