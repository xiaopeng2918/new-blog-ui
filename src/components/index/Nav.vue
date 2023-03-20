<template>
  <div class="fixed">
    <div class="nav_container">
      <router-link to="/home" class="site_author">xiaopeng-blog</router-link>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#1b1c1d"
        text-color="#fff"
        active-text-color="#ffd04b"
        menu-trigger="click"
        :router="true"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">分类</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="/archives">归档</el-menu-item>
        <el-menu-item index="/moments">动态</el-menu-item>
        <el-menu-item index="/friends">友链</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
      <div class="search">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex2: "1",
      input3: '',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu {
  user-select: none;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1c1d;
}
.fixed .site_author {
  color: red;
}
.nav_container {
  display: flex;
  align-items: center;
  width: 1400px !important;
  border: none;
  margin-left: auto !important;
  margin-right: auto !important;
}
.nav_container .el-menu {
  display: flex;
  justify-content: space-between;
  border: none;
}
.nav_container .el-menu-item {
  min-width: 100px;
  text-align: center;
}

.nav_container .search {
  flex: 1;
  text-align: right;
}

.nav_container .search .el-input {
  max-width: 300px;
}
</style>