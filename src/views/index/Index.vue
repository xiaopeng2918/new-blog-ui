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
  </div>
</template>

<script>
import Nav from "@/components/index/Nav";
import IntroductionCard from "@/components/index/IntroductionCard.vue";
import RencentAndTags from "@/components/index/RencentAndTags.vue";
import { getSite } from "@/api/index.js";
export default {
  data() {
    return {
      tagList: [],
    };
  },
  components: {
    Nav,
    IntroductionCard,
    RencentAndTags,
  },
  created() {
    this.getSiteRef();
  },
  methods: {
    getSiteRef() {
      getSite().then((res) => {
        if (res.code === 200) {
          this.tagList = res.data.tagList;
        }
      });
    },
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
  width: 1400px !important;
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