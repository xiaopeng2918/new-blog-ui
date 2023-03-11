<template>
  <div>
    <div
      class="list_container card_hover"
      v-for="item in blogList"
      :key="item.id"
    >
      <!-- blogItem -->
      <div class="ui_container">
        <!-- 文章标题 -->
        <div class="row">
          <h2 class="m_center">
            <a href="#">{{ item.title }}</a>
          </h2>
        </div>
        <!-- 文章简要信息 -->
        <div class="row link">
          <div class="m_center">
            <div class="item">
              <i class="calendar alternate outline icon"></i
              ><span>{{ item.createTime }}</span>
            </div>
            <div class="item">
              <i class="eye icon"></i><span>{{ item.views }}</span>
            </div>
            <div class="item">
              <i class="pencil alternate icon"></i
              ><span>字数≈{{ item.words }}字</span>
            </div>
            <div class="item">
              <i class="hourglass half icon"></i
              ><span>阅读时长≈{{ item.readTime }}分钟</span>
            </div>
          </div>
        </div>
        <!-- 文章所属分类 -->
        <router-link to="#" class="ui orange large ribbon label">
          <i class="small folder open icon"></i
          ><span>{{ item.category.name }}</span>
        </router-link>
        <!-- 文章描述信息 -->
        <div class="row m_padding" v-html="item.description"></div>
        <div class="row">
          <div class="m_center">
            <a href="#" class="ui red button">阅读全文</a>
          </div>
        </div>
        <div class="ui inverted divider"></div>
        <!-- 文章标签 -->
        <div class="row">
          <a
            class="ui label"
            v-for="item1 in item.tags"
            :class="item1.color"
            :key="item1.name"
            >{{ item1.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    blogList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list_container {
  background-color: #fff;
  border-radius: 3em;
  border: 1px solid #d4d4d5;
  margin-bottom: 3em;
}
.ui_container {
  padding: 1.5em 1em;
}
.ui_container .row {
  display: flex;
  width: 100%;
  padding: 0.5em 0;
}

.ui_container .link .item {
  display: inline-block;
  margin: 0 1em;
  padding: 3px 0;
}

.ui_container .link .item:first-child {
  margin-left: 0;
}
</style>