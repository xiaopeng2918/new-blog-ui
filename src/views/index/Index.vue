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
          <rencent-and-tags/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/index/Nav";
import IntroductionCard from "@/components/index/IntroductionCard.vue";
import RencentAndTags from "@/components/index/RencentAndTags.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    Nav,
    IntroductionCard,
    RencentAndTags
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
}
.main .right {
  width: 18.75%;
  /* background-color: #fff; */
}
/* 右侧 */

</style>