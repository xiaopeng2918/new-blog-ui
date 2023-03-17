<template>
  <div class="container">
    <div class="header_info">
      <h2 class="item">文章归档</h2>
      <p class="item">目前共计{{count}}篇日志</p>
    </div>
    <div class="date_line">
      <div :class="colorObj[index%5]" v-for="(value, key, index) in blogMap" :key="key">
        <div class="dl_header">
          <a class="ui large label">{{ key }}</a>
        </div>
        <div class="dl_item" v-for="item in value" :key="item.id">
          <div class="dl_wrap">
            <span class="dl_date">{{ item.day }}</span>
            <a>
              <div class="ui label dl_title">{{ item.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ui label last_label">Hello World!!!</div>
  </div>
</template>

<script>
import { getArchives } from "../../api/archives";
export default {
  data() {
    return {
      blogMap: {},
      // 变换每个月的链表颜色
      colorObj: {
        0: "dl_blue",
        1: "dl_dark",
        2: "dl_green",
        3: "dl_purple",
        4: "dl_red",
      },
      // 文章数量
      count: 0,
    };
  },
  created() {
    this.refGetArchives();
  },
  methods: {
    refGetArchives() {
      getArchives().then((res) => {
        if (res.code === 200) {
          this.blogMap = res.data.blogMap;
          this.count = res.data.count
        }
      });
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
}
.container {
  border: 1px solid rgb(212, 212, 212);
  background-color: #ffffff;
}

.container .header_info {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(212, 212, 212);
}
.container .header_info .item {
  width: 100%;
  padding: 0.3em 1em 0.3em 1em;
  text-align: center;
}
.date_line {
  margin: 20px 0;
}
.date_line .dl_header {
  width: 12em;
  text-align: center;
}
.dl_item {
  margin-left: 5.8em;
  border-left: 5px solid #23b7e5;
}
.dl_item .dl_wrap {
  padding: 1.5em 0;
}

.dl_item .dl_wrap::before {
  content: "";
  display: block;
  position: relative;
  top: 1.8em;
  left: -0.58em;
  width: 0.8em;
  height: 0.8em;
  border-width: 3px;
  border-style: solid;
  border-color: #23b7e5;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 0 4px #fff;
  transition: all 1s;
}
.dl_item .dl_wrap:hover::before {
  background: 0 0;
  border-color: #fff;
}

.dl_item .dl_wrap .dl_date {
  margin-left: -3.5em;
}
.dl_item .dl_wrap .dl_title {
  margin-left: 3em;
  padding: 1em;
  display: inline-block;
}

.dl_item .dl_wrap .dl_title::before {
  content: "";
  position: relative;
  float: left;
  display: block;
  margin-left: -2.3em;
  width: 0.7em;
  height: 0.7em;
  /* background-color: red; */
  border-top: 0.7em solid transparent;
  border-right: 0.7em solid #e8e8e8;
  border-bottom: 0.7em solid transparent;
  border-left: 0.7em solid transparent;
}

.dl_blue .dl_header a, .dl_blue .dl_item .dl_title {
  background: #1478f3;
  color: #fff;
}
.dl_blue .dl_item .dl_wrap .dl_title::before {
  border-right: 0.7em solid #1478f3;
}

.dl_dark .dl_header a, .dl_dark .dl_item .dl_title {
  background: #18191b;
  color: #fff;
}
.dl_dark .dl_item .dl_wrap .dl_title::before {
  border-right: 0.7em solid #18191b;
}

.dl_green .dl_header a, .dl_green .dl_item .dl_title {
  background: #58c027;
  color: #fff;
}
.dl_green .dl_item .dl_wrap .dl_title::before {
  border-right: 0.7em solid #58c027;
}


.dl_purple .dl_header a, .dl_purple .dl_item .dl_title {
  background: #dc23d2;
  color: #fff;
}
.dl_purple .dl_item .dl_wrap .dl_title::before {
  border-right: 0.7em solid #dc23d2;
}


.dl_red .dl_header a, .dl_red .dl_item .dl_title {
  background: #df1559;
  color: #fff;
}
.dl_red .dl_item .dl_wrap .dl_title::before {
  border-right: 0.7em solid #df1559;
}

.last_label {
  display: inline-block;
  width: 12em;
  margin-top: -1.6em;
  margin-left: 4em;
  background-color: #000;
  color: #FFF;
  padding: 1em;
}

</style>