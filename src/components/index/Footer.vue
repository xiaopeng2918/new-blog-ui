<template>
  <div class="footer_container">
    <div class="blog_content">
      <div class="left_content">
        <div class="last_blog_title last_blog_item">最新博客</div>
        <div class="last_blog_item" v-for="blog in newBlogList" :key="blog.id">
          {{ blog.title }}
        </div>
      </div>
      <div class="right_content">
        <div class="motto_content">
          <div class="motto_sentence">{{ motto.hitokoto }}</div>
          <div class="motto_creator">——《{{ motto.creator }}》</div>
        </div>
      </div>
    </div>
    <div class="icon_content">
      <div class="site_info item">
        <span v-if="siteInfo.copyright">{{ siteInfo.copyright.title }}</span>
        <span v-if="siteInfo.copyright" class="ml2">{{
          siteInfo.copyright.siteName
        }}</span>
      </div>
      <div class="ui center aligned container site_icon item">
        <div class="icon_item" v-for="tag in badges" :key="tag.value">
          <a target="_blank" :href="tag.url" :title="tag.title">
            <span class="badge_subject">{{ tag.subject }}</span>
            <span :class="`bg_${tag.color}`" class="badge_value">{{
              tag.value
            }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    badges: {
      type: Array,
      required: true,
    },
    siteInfo: {
      type: Object,
      required: true,
    },
    newBlogList: {
      type: Array,
      required: true,
    },
    motto: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/badge.css";
.footer_container {
  width: 100%;
  background-color: #303132;
  color: #afafb0;
}
.footer_container .blog_content {
  padding: 0.8em;
  width: 70%;
  display: flex;
  margin: 0 auto;
  /* background-color: #fff; */
  border-bottom: 1px solid #48494a;
}

.footer_container .blog_content .left_content {
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #48494a;
}
.footer_container .blog_content .left_content .last_blog_title {
  color: #fff;
  width: 100%;
  font-size: 1.3em;
}
.footer_container .blog_content .left_content .last_blog_item {
  width: 100%;
  padding: 0.4em 4em;
  text-align: center;
}
.footer_container .blog_content .right_content {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.footer_container .blog_content .right_content .motto_sentence {
  padding: 0.4em;
  font-size: 1.2em;
}

.footer_container .blog_content .right_content .motto_creator {
  text-align: right;
}

.icon_content {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
.icon_content .item {
  width: 100%;
  padding: 1em 4em;
  /* text-align: center; */
}
.icon_content .site_info {
  text-align: center;
  font-size: 1.2em;
}
.icon_content .site_info .ml2 {
  margin-left: 2em;
  display: inline-block;
}
</style>