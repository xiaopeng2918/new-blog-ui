<template>
  <div>
   <BlogList :blogList="blogList" />
  </div>
</template>

<script>
import { getBlogList } from "@/api/home";
import BlogList from "@/components/blog/BlogList.vue";
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getBlogListRef();
  },
  components: {
    BlogList,
  },
  methods: {
    getBlogListRef(pageNum) {
      getBlogList(pageNum).then((res) => {
        if (res.code === 200) {
          this.blogList = res.data.list;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>