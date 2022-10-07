<template>
  <van-cell :title="name" center :label="author + '-' + name">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" size="25" @touchstart="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    author: String,
    name: String,
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style>
</style>