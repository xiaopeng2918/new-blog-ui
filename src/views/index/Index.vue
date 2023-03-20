<template>
  <div class="container">
    <!-- 顶部导航 -->
    <Nav />
    <div class="main">
      <div class="content-container">
        <!-- 左侧 -->
        <div class="left">
          <introduction-card />
        </div>
        <!-- 中间 -->
        <div class="middle">
          <router-view />
        </div>
        <!-- 右侧 -->
        <div class="right">
          <rencent-and-tags :tagList="tagList" />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer :badges="badges" :motto="motto" :newBlogList="newBlogList" :siteInfo="siteInfo" />
  </div>
</template>

<script>
import Nav from "@/components/index/Nav";
import IntroductionCard from "@/components/index/IntroductionCard.vue";
import RencentAndTags from "@/components/index/RencentAndTags.vue";
import Footer from "../../components/index/Footer.vue";
import { getSite, getMotto } from "@/api/index.js";
export default {
  data() {
    return {
      tagList: [],
      newBlogList: [],
      siteInfo: {
       blogName: '',
       webTitleSuffix: '',
      },
      badges: [],
      motto: {}
    };
  },
  components: {
    Nav,
    IntroductionCard,
    RencentAndTags,
    Footer,
  },
  created() {
    this.getSiteRef();
    this.getMottoRef();
  },
  methods: {
    getSiteRef() {
      getSite().then((res) => {
        if (res.code === 200) {
          this.tagList = res.data.tagList;
          this.badges = res.data.badges;
          this.siteInfo = res.data.siteInfo;
          this.newBlogList = res.data.newBlogList;
          console.log(this.badges);
          console.log(this.siteInfo);
          console.log(this.newBlogList);
        }
      });
    },
    getMottoRef(){
      getMotto().then(res => {
        this.motto = res;
        console.log(this.motto);
      })
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.container .main {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  flex: 1;
  /* justify-content: space-between; */
  height: 100vh;
  /* background-color: #756; */
}

.container .main .content-container {
  display: flex;
  max-width: 1400px !important;
}
.main .left {
  width: 18.75%;
  /* background-color: #333; */
}
.main .middle {
  width: 62.5%;
  margin: 0 2em;
  /* background-color: #fff; */
}
.main .right {
  width: 18.75%;
  /* background-color: #fff; */
}
/* 右侧 */
</style>