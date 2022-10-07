<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />

    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >主页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜素</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      activeTitle: this.$route.meta.title,
    };
  },
  setup() {
    const active = ref(0);
    return { active };
  },
  watch: {
    $route(str) {
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style>
.main {
  padding-top: 46px;
}
</style>