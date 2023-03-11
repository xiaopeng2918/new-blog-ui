<template>
  <div class="ui_container">
    <div class="box card_hover">
      <div class="title">随机文章</div>
      <div class="content">内容1</div>
    </div>
    <div class="box card_hover">
      <div class="title">标签板</div>
      <div class="content tags">
        <router-link
          to="#"
          v-for="tag in tagList"
          :key="tag.name"
					class="ui label text-500"
					:class="tag.color"
          >{{ tag.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "RencentAndTags",
	props: {
		tagList: {
			type: Array,
			required: true,
		}
	},
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style scoped>
.ui_container .box {
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 10px;
  margin: 1em 0;
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  background-color: #efefef;
}

.ui_container .box .title {
  padding: 10px;
  /* background-color: #f3f4fe; */
}
.ui_container .box .content {
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
}

.ui_container .box .tags {
  display: flex;
  flex-wrap: wrap;
}

.ui_container .box .tags a {
  margin: 3px;
  padding: 8px;
  border-radius: 0.8em;
}

.ui_container .box .content {
  border-top: 2px solid #fbbd08;
}

.ui_container .box:first-child {
  margin-top: 0;
}
</style>