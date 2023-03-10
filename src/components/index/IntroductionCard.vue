<template>
  <div class="card_hover">
    <el-card>
      <img src="http://123.249.120.69:6677/woailuo.png" class="image" />
      <div class="content">内容一</div>
      <div class="content">内容二</div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.card_hover {
    border-radius: 10px;
}
.el-card {
  display: flex;
}
.image {
  width: 100%;
  display: block;
}
.el-card .content {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 1em 1em;
}
</style>