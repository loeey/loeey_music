<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 热门搜索 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <div class="hot_title">热门搜索</div>
      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(obj, index) in hotList"
          :key="index"
          @click="btn(obj.first)"
        >
          {{ obj.first }}
        </li>
      </ul>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <p class="title">搜索结果</p>
      <song-item
        v-for="obj in resultList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name + '-' + obj.name"
        :id="obj.id"
      ></song-item>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem";
export default {
  data() {
    return {
      value: "",
      hotList: [],
      resultList: [],
      timer: null,
    };
  },
  async created() {
    const res = await hotSearchAPI();
    this.hotList = res.data.result.hots;
    console.log(res);
  },
  methods: {
    async btn(str) {
      this.value = str;
      const res = await searchResultAPI({
        keywords: this.value,
      });
      console.log(res);
      this.resultList = res.data.result.songs;
      setTimeout(clearTimeout(this.timer));
    },
  },
  watch: {
    value(val) {
      if (val.length === 0) return (this.resultList = []);
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          keywords: val,
        });
        console.log(res);
        this.resultList = res.data.result.songs;
      }, 500);
    },
  },
  components: {
    SongItem,
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 2px solid #d3d4da;
}
</style>